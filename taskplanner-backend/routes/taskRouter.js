const express = require('express');
const router = express.Router();
const valiadateToken = require('../middleware/validTokenHandler');
const {createTask, assignTaskToUser, updateTaskStatus, getAllOfSprintTask} = require('../controllers/taskController');

router.post("/create", valiadateToken, createTask)
router.post("/assignee", valiadateToken, assignTaskToUser)
router.put("/status", valiadateToken, updateTaskStatus)
router.get("/AllTask", valiadateToken, getAllOfSprintTask)


module.exports = router;