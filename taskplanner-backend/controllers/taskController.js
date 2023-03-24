const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');
const Sprint = require('../models/sprintModel');
const User = require('../models/userModel');


const createTask = asyncHandler(async (req, res) => {

    // console.log(req.body);

    const { name, type, sprint } = req.body;


    if (!name || !type || !sprint) {
        res.status(400)
        throw new Error("All fields are required");
    }
    const task = await Task.create({
        name,
        type,
        sprint

    });

    if (task) {
        const sprintObj = await Sprint.findById(sprint);
        sprintObj.tasks.push(task);
        await sprintObj.save();
        res.status(201).json(task);
    } else {
        res.status(400)
        throw new Error("Invalid task data");
    }




});



const assignTaskToUser = asyncHandler(async (req, res) => {

    console.log(req.body);

    const {taskid, userid}= req.body;


    if (!taskid || !userid) {
        res.status(400)
        throw new Error("All fields are required");
    }

    const user = await User.findById(userid);
    if (!user) {
        res.status(400)
        throw new Error("Invalid user");
    }

    const task = await Task.findById(taskid);

    if (!task) {
        res.status(400)
        throw new Error("Invalid task");
    }


    task.assignee = userid;
    await task.save();
    user.tasks.push(task);
    await user.save();

    res.status(200).json({ message: "success" });


});


const updateTaskStatus = asyncHandler(async (req, res) => {
    const { taskid, status } = req.body;



    if (!taskid || !status) {
        res.status(400)
        throw new Error("All fields are required");
    }

    const task = await Task.findById(taskid);

    if (!task) {
        res.status(400)
        throw new Error("Invalid task");
    }


    if(task.assignee.toString() == req.user._id.toString()){
        task.status = status;
        const updatedTask = await task.save();
    
    
        if(updatedTask){
            res.status(200).json(updatedTask);
        }else{
            res.status(400)
            throw new Error("Invalid task data");
        }    
    
    }else{
        res.status(400)
        throw new Error("You are not assigned to this task");
    }

  


});





module.exports = { createTask, assignTaskToUser , updateTaskStatus};