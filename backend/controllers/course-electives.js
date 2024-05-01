const CourseElectives = require("../models/Course-electives");

exports.createCourseElectives = (req, res, next) => {
  const { degree, electives } = req.body;
  CourseElectives.create({
    degree,
    electives,
  })
    .then(() => {
      return res
        .status(200)
        .json({ success: true, message: "Electives Updated" });
    })
    .catch((err) => {
      next(err);
    });
};
