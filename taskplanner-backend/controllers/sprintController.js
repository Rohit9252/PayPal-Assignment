const asyncHandler = require('express-async-handler');
const Sprint = require('../models/sprintModel');


// @desc Create a new sprint
// @route POST /api/sprints/create
// @access Priv
const createSprint = asyncHandler(async (req, res) => {
    const {name} = req.body;

    if(!name){
        res.status(400)
        throw new Error("Name is required");
    }

    const exitSprint = Sprint.findOne({name});

    if(exitSprint){
        res.status(400)
        throw new Error("Sprint already exist");
    }

    const sprint = await Sprint.create({name});

    if(sprint){
        res.status(201).json({sprint});

    }else{
        res.status(400)
        throw new Error("Invalid sprint data");
    }
});



module.exports = {createSprint};