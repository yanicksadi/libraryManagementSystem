import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Book = sequelize.define("Book", 
{
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'authors',
      key: 'id',
    },
  },
}, {
  tableName: "books",
  timestamps: true
});

export default Book;