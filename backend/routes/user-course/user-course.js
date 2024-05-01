const express = require("express");
const { createUserCourse, findAllUserCourseByCourse } = require("../../controllers/user-course");
const router = express.Router();

router.post("/create", [], createUserCourse);
router.get("/:srcode/all", [], findAllUserCourseByCourse);

module.exports = router;
