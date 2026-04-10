import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js"

const BorrowRecord = sequelize.define("BorrowRecords", 
  {
  borrow_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "borrow_records",
  timestamps: true,
});

export default BorrowRecord;