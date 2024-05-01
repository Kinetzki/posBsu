const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const CourseTakers = sequelizeConnect.define("course_takers", {
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
    allowNull: false
  },
  user_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
});


module.exports = CourseTakers;