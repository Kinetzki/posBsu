const express = require('express');
const { createCourseElectives } = require('../../controllers/course-electives');
const router = express.Router();

router.post("/create", [], createCourseElectives);

module.exports = router;