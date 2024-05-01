const express = require('express');
const router = express.Router();
const { createCourse } = require('../../controllers/course');

router.post("/create", [], createCourse);

module.exports = router;