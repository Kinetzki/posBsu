const User = require("../models/User");
const UserCourse = require("../models/User-Course");
const Course = require("../models/Course");

exports.createUserCourse = (req, res, next) => {
  const {} = req.body;
};

exports.findAllUserCourseByCourse = (req, res, next) => {
  const { srcode } = req.params;

  User.findOne({
    where: {
      srcode: srcode,
    },
  })
    .then((data) => {
      if (data) {
        return UserCourse.findAll({
          where: {
            user_id: data.id,
          },
        }).then((userCourses) => {
          // const courses = userCourses.map((course) => {
          //   var title = "";
          //   Course.findOne({
          //     where: {
          //       course_code: course.course_code
          //     }
          //   }).then(data=>{
          //     title = data.course_title;
          //   })
          //   return {
          //     course_code: course.course_code,
          //     course_title: title,
          //     instructor: course.instructor,
          //     section: course.section,
          //     academic_year: course.academic_year,
          //   };
          // });
          return res.status(200).json({ success: true, userCourses });
        });
      }
    })
    .catch((err) => {
      next(err);
    });
};
