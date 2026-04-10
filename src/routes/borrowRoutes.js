import express from 'express';
import {getBorrowedBooks, createBorrow, returnBook, getAllBorrows } from '../controllers/borrowController.js';

const router = express.Router();

router.get('/borrowed_books', getBorrowedBooks);
router.get("/borrows", getAllBorrows);
router.post("/Borrow", createBorrow);
router.put("/return/:id", returnBook);

export default router;