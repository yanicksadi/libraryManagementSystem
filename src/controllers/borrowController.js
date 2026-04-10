import { Member, Book, BorrowRecord } from "../models/index.js";


// get Currently borrowed Books

export const getBorrowedBooks = async (req, res, next) => {
  try {
    const borrowedBooks = await BorrowRecord.findAll({
      where: {
        return_date: null,
      },
      include: [
        { model: Book, attributes: ["title"]},
        { model: Member, attributes: ["name","email"] },
      ],
    });
    res.status(200).json(borrowedBooks);
  } catch (error){
    next(error);
  }
}

// Create  A borrow

export const createBorrow = async (req, res, next) => {
  
  try {
    const { member_id, book_id } = req.body;

    const newBorrow = await BorrowRecord.create({
      member_id,
      book_id,
      borrow_date: new Date(),
      return_date: null,
    });

    res.status(201).json(newBorrow);
  } catch (error){
    next(error);
  }
};

// returning the book

export const returnBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await BorrowRecord.findByPk(id);

    if(!record){
      return res.status(404).json({ message: "Borrow record not found" });
    }

    await record.update({ return_date: new Date() });

    res.status(200).json({
      message: "Book returned successfully",
      record,
    });
  } catch(error){
    next(error);
  }
};

// get all Borrows
export const getAllBorrows = async (req, res, next) => {
  try {
    const borrows = await BorrowRecord.findAll({
      include: [ 
      {model: Book, attributes: ["title"] },
      {model: Member, attributes: ["name", "email"] },
    ],
    });
    res.status(200).json(borrows);
  } catch (error){
    next(error);
  }
};

