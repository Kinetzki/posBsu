const express = require("express");
const { createUserCourse, findAllUserCourseByCourse, deleteUserCourse } = require("../../controllers/user-course");
const router = express.Router();

router.post("/create", [], createUserCourse);
router.get("/:srcode/all", [], findAllUserCourseByCourse);
router.delete("/:courseId/delete", [], deleteUserCourse);

module.exports = router;
