const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const Course = sequelizeConnect.define("courses", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  course_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  course_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  degree: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  units: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  course_type: {
    type: Sequelize.ENUM("specialization","major", "elective", "core", "thesis", "capstone", "dissertation")
  }
});

module.exports = Course;