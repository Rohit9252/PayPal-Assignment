const express = require('express');
const router = express.Router();
const valiadateToken = require('../middleware/validTokenHandler');
const {createTask, assignTaskToUser, updateTaskStatus} = require('../controllers/taskController');


router.post("/create", valiadateToken, createTask)
router.post("/assignee", valiadateToken, assignTaskToUser)
router.put("/status", valiadateToken, updateTaskStatus)


module.exports = router;