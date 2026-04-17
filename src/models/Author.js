import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js"

const Author = sequelize.define("Author", {
  // id: {
  //   type: DataTypes.UUID,
  //   defaultValue: DataTypes.UUIDV4,
  //   primaryKey: true,
  //   allowNull: false
  // },
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