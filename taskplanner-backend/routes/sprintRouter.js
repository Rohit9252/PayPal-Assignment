const express = require('express');
const router = express.Router();
const {createSprint} = require('../controllers/sprintController');
const valiadateToken = require('../middleware/validTokenHandler');


router.use(valiadateToken);
router.post("/create",  createSprint);


module.exports = router;