const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');
const Sprint = require('../models/sprintModel');
const User = require('../models/userModel');


// @desc Create a new Task
// @route POST /api/users/task/create
// @access Private
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


// @desc assignee a task to a user
// @route POST /api/users/task/assignee
// @access Private
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


// @desc update task status
// @route POST /api/users/task/status
// @access Private
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

    const result =  task.assignee.toString() === req.user.id.toString();
    console.log(result);
    if(result){
        task.status = status;
        const updatedTask = await task.save();
    
        res.status(200).json(updatedTask);

    
    }else{
        res.status(400)
        throw new Error("You are not assigned to this task");
    }

  


});



// @desc get all tasks of a sprint
// @route POST /api/users/task/taks
// @access Private
const getAllOfSprintTask = asyncHandler(async (req, res) => {
    const { sprintid } = req.body;


    if (!sprintid) {
        res.status(400)
        throw new Error("All fields are required");
    }

   const sprint = await Sprint.findById(sprintid);

    if(!sprint){
        res.status(400)
        throw new Error("Invalid sprint");
    }else{
        const tasks = await Task.find({sprint: sprintid});
        res.status(200).json(tasks);
    }


});



module.exports = { createTask, assignTaskToUser , updateTaskStatus, getAllOfSprintTask};