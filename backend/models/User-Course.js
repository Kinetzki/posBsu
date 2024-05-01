const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");
const User = require("./User");

const UserCourse = sequelizeConnect.define("user_course", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  course_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  course_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  grade: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  instructor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  section: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  academic_year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

UserCourse.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
  as: "user",
});

module.exports = UserCourse;
