const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const CourseElectives = sequelizeConnect.define("course_electives", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  degree: {
    type: Sequelize.STRING,
    allowNull: false
  },
  electives: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = CourseElectives;
