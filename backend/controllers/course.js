const Course = require("../models/Course");

exports.createCourse = (req, res, next) => {
  const { course_code, course_title, degree, units, course_type } = req.body;
  Course.findOne({
    where: {
      course_code: course_code,
    },
  })
    .then((data) => {
      if (data) {
        return res.status(400).json({
          success: false,
          message: "Course already Exist in the database",
        });
      } else {
        return Course.create({
          course_code,
          course_title,
          degree,
          units,
          course_type,
        }).then(() => {
          return res
            .status(200)
            .json({ success: true, message: "Course added" });
        });
      }
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
