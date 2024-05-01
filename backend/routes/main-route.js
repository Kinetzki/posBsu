const express = require("express");
const router = express.Router();

//imports
const userRoute = require("./user/user");
const courseRoute = require("./course/course");
const usercourseRoute = require("./user-course/user-course");
const electiveRoute = require("./course-electives/course-electives");

//endpoints
router.use("/user", userRoute);
router.use("/course", courseRoute);
router.use("/user-course", usercourseRoute);
router.use("/course-elective", electiveRoute);

module.exports = router;
