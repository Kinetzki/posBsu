const Sequelize = require("sequelize");
const sequelizeConnect = require("../connection/database");

const User = sequelizeConnect.define("users", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  srcode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  degree: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


module.exports = User;
