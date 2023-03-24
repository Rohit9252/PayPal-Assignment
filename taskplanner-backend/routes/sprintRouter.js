const express = require('express');
const router = express.Router();
const {createSprint, getAllSprints} = require('../controllers/sprintController');
const valiadateToken = require('../middleware/validTokenHandler');


router.use(valiadateToken);
router.post("/create",  createSprint);
router.get("/allsprints",  getAllSprints);


module.exports = router;