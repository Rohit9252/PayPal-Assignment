const asyncHandler = require('express-async-handler');
const Sprint = require('../models/sprintModel');
const Task = require('../models/taskModel');


// @desc Create a new sprint
// @route POST /api/sprints/create
// @access Private
const createSprint = asyncHandler(async (req, res) => {
    const {name} = req.body;

    if(!name){
        res.status(400)
        throw new Error("Name is required");
    }

    const exitSprint = await Sprint.findOne({name});

    

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



// @desc Get All Sprints
// @route Get /api/users/sprints
// @access Private


const getAllSprints = asyncHandler(async (req, res) => {

    const sprints = await Sprint.find();
    if(sprints){
        res.status(200).json(sprints);
    }else{
        res.status(400)
        throw new Error("Invalid sprint data");
    }

});

const getSprintTask = asyncHandler(async (req, res) => {

    const sprint = await Sprint.findById(req.params.id);

    if(sprint){
        const task = await Task.find({sprint: sprint._id}).select("-sprint").populate("assignee", "name");

        // const taskObj ={
        //     ...task,
        //     sprint: sprint.name
        // }

        

        res.status(200).json(task);
    }else{
        res.status(400)
        throw new Error("Invalid sprint data");
    }



});


module.exports = {createSprint, getAllSprints, getSprintTask};