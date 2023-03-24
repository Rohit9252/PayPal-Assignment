const express = require('express');
const router = express.Router();
const {createSprint, getAllSprints, getSprintTask} = require('../controllers/sprintController');
const valiadateToken = require('../middleware/validTokenHandler');


router.use(valiadateToken);
router.post("/create",  createSprint);
router.get("/allsprints",  getAllSprints);
router.get("/:id",  getSprintTask);


module.exports = router;

