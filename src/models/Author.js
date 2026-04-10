import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js"

const Author = sequelize.define("Author", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
},
  {
    tableName: "authors",
  })

export default Author;