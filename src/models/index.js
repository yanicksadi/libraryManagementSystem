import Member from "./Member.js";
import Author from "./Author.js";
import Book from "./Book.js";
import BorrowRecord from "./BorrowRecord.js";


Book.belongsTo(Author, {foreignKey: "author_id" });
Author.hasMany(Book, {foreignKey: "author_id"});

Member.belongsToMany(Book, {
  through: BorrowRecord,
  foreignKey: "member_id",
});

Book.belongsToMany(Member, {
  through: BorrowRecord,
  foreignKey: "book_id",
});

BorrowRecord.belongsTo(Member, {foreignKey: "member_id"});
BorrowRecord.belongsTo(Book, { foreignKey: "book_id"});

export {Author, Book, Member, BorrowRecord};