import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Member = sequelize.define("Member", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
},
  {
    tableName: "members",
  }
);

export default Member;