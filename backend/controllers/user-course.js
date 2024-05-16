const User = require("../models/User");
const UserCourse = require("../models/User-Course");
const Course = require("../models/Course");

exports.createUserCourse = (req, res, next) => {
  const {
    srcode,
    course_code,
    course_title,
    grade,
    instructor,
    section,
    academic_year,
  } = req.body;

  User.findOne({
    where: {
      srcode: srcode,
    },
  }).then((user) => {
    if (user) {
      UserCourse.findOne({
        where: {
          user_id: user.id,
          course_code: course_code,
        },
      }).then((data) => {
        if (!data) {
          UserCourse.create({
            user_id: user.id,
            course_code,
            course_title,
            grade,
            instructor,
            section,
            academic_year,
          }).then(() => {
            return res
              .status(200)
              .json({ success: true, message: "User course created" });
          });
        }
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }
  }).catch(err=>{
    next(err);
  })
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
          return res.status(200).json({ success: true, userCourses });
        });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteUserCourse = (req, res, next) => {
  const {courseId} = req.params;
  UserCourse.findOne({
    where: {
      id: courseId
    }
  }).then(course => {
    if (course) {
      course.destroy().then(()=>{
        return res.status(200).json({success: true, message: "User course Deleted"});
      })
    } else {
      return res.status(400).json({success: false, message: "Course id does not exist"});
    }
  }).catch(err=>{
    next(err);
  })
}