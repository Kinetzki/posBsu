const User = require("../models/User");
const UserCourse = require("../models/User-Course");
const Courses = require("../models/Course");
const CourseElectives = require("../models/Course-electives");
const CourseTakers = require("../models/Course-takers");

exports.createUser = (req, res, next) => {
  const { name, srcode, courses, academic_year, degree } = req.body;
  User.findOne({
    where: {
      srcode: srcode,
    },
  })
    .then((data) => {
      if (data) {
        courses.map((course) => {
          return UserCourse.findOne({
            where: {
              user_id: data.id,
              course_code: course.courseCode,
              academic_year: academic_year,
            },
          })
            .then((info) => {
              if (!info) {
                return UserCourse.create({
                  course_code: course.courseCode,
                  course_title: course.courseTitle,
                  grade: course.grade,
                  units: course.units,
                  section: course.section,
                  instructor: course.instructor,
                  user_id: data.id,
                  academic_year: academic_year,
                });
              }
            })
            .then(() => {
              if (!data.name && name) {
                data.name = name;
                return data.save();
              }
            });
        });
        return res.status(200).json({
          success: true,
          message: "User already exists so adding courses",
        });
      } else {
        return User.create({
          name: name,
          srcode: srcode,
          degree: degree,
        })
          .then((newUser) => {
            console.log(newUser);
            courses.map((course) => {
              return UserCourse.create({
                course_code: course.courseCode,
                course_title: course.courseTitle,
                grade: course.grade,
                units: course.units,
                section: course.section,
                instructor: course.instructor,
                user_id: newUser.id,
                academic_year: academic_year,
              });
            });
          })
          .then(() => {
            return res
              .status(200)
              .json({ success: true, message: "User created" });
          });
      }
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

exports.findRequiredSubs = (req, res, next) => {
  const { srcode } = req.params;

  User.findOne({
    where: {
      srcode: srcode,
    },
  })
    .then((user) => {
      const taken = [];
      if (user) {
        return UserCourse.findAll({
          where: {
            user_id: user.id,
          },
        })
          .then((userCourses) => {
            userCourses.forEach((element) => {
              taken.push(element.course_code);
            });
          })
          .then(() => {
            const required = [];
            // return res.status(200).json({success: true, taken});
            return Courses.findAll({
              where: {
                degree: user.degree,
              },
            })
              .then((allCourses) => {
                allCourses.forEach((element) => {
                  if (!taken.includes(element.course_code)) {
                    required.push(element);
                  }
                });
              })
              .then(() => {
                const courseTypes = {};
                function addItem(key, item) {
                  if (!courseTypes[key]) {
                    courseTypes[key] = []; // If the key doesn't exist, create an empty array
                  }
                  courseTypes[key].push(item); // Push the item into the array
                }
                required.forEach((el) => {
                  addItem(el.course_type, el);
                });
                return CourseElectives.findOne({
                  where: {
                    degree: user.degree,
                  },
                }).then((el) => {
                  var elecFull = false;
                  console.log(el.electives);
                  const courseKeys = Object.keys(courseTypes);
                  console.log(taken);
                  if (el.electives <= taken.length) {
                    console.log("Removed");
                    delete courseTypes.elective;
                    elecFull = true;
                  }
                  courseKeys.map((item) => {
                    if (
                      item.toString() !== "thesis" &&
                      item.toString() !== "dissertation" &&
                      item.toString() !== "capstone"
                    ) {
                      if (!(elecFull && item === "elective")) {
                        if (courseTypes[item].length > 0) {
                          // no_thesis = true;
                          delete courseTypes.thesis;
                          delete courseTypes.dissertation;
                          delete courseTypes.capstone;
                        }
                      }
                    }
                  });
                  return res.status(200).json({ success: true, courseTypes });
                });
              });
          });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "USer does not exist" });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.findAllTakers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      const allTakers = [];
      const promises = users.map((user) => {
        const taken = [];
        if (user) {
          return UserCourse.findAll({
            where: {
              user_id: user.id,
            },
          })
            .then((userCourses) => {
              userCourses.forEach((element) => {
                taken.push(element.course_code);
              });
            })
            .then(() => {
              const required = [];
              return Courses.findAll({
                where: {
                  degree: user.degree,
                },
              })
                .then((allCourses) => {
                  console.log(user.degree);
                  allCourses.forEach((element) => {
                    console.log(element.course_code);

                    if (!taken.includes(element.course_code)) {
                      required.push(element);
                    }
                  });
                  console.log("------------------------------------------");
                  // console.log(user.degree)
                  // required.forEach(re => {
                  //   console.log(re.course_title);
                  // })
                  // console.log("----------------------------------------")
                })
                .then(() => {
                  const courseTypes = {};
                  function addItem(key, item) {
                    if (!courseTypes[key]) {
                      courseTypes[key] = [];
                    }
                    courseTypes[key].push(item);
                  }
                  required.forEach((el) => {
                    addItem(el.course_type, el);
                  });
                  return CourseElectives.findOne({
                    where: {
                      degree: user.degree,
                    },
                  }).then((el) => {
                    var elecFull = false;
                    const courseKeys = Object.keys(courseTypes);
                    if (el.electives <= taken.length) {
                      delete courseTypes.elective;
                      elecFull = true;
                    }
                    courseKeys.map((item) => {
                      if (
                        item.toString() !== "thesis" &&
                        item.toString() !== "dissertation" &&
                        item.toString() !== "capstone"
                      ) {
                        if (!(elecFull && item === "elective")) {
                          if (courseTypes[item].length > 0) {
                            // no_thesis = true;
                            delete courseTypes.thesis;
                            delete courseTypes.dissertation;
                            delete courseTypes.capstone;
                          }
                        }
                      }
                    });
                    Object.keys(courseTypes).map((item) => {
                      courseTypes[item].map((el) => {
                        allTakers.push(el);
                      });
                    });
                  });
                });
            });
        }
      });
      // Return a promise that resolves when all inner promises are resolved
      return Promise.all(promises).then(() => {
        return allTakers; // Resolve with the allTakers array
      });
    })
    .then((allTakers) => {
      // Now you can use the allTakers array
      res.status(200).json({ success: true, courseTypes: allTakers });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const { srcode } = req.params;
  User.findOne({
    where: {
      srcode: srcode,
    },
  })
    .then((user) => {
      if (user) {
        user.destroy().then(() => {
          return res
            .status(200)
            .json({ success: true, message: "User removed" });
        });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "User does not exist" });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.findUserById = (req, res, next) => {
  const { srcode } = req.params;
  User.findOne({
    where: {
      srcode: srcode,
    },
  })
    .then((user) => {
      if (user) {
        return res.status(200).json({ success: true, user });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "User does not exist" });
      }
    })
    .catch((err) => {
      next(err);
    });
};
