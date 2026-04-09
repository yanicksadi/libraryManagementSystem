import express from 'express';
const router = express.Router();
import getBorrowedBooks from '../controllers/borrowController.js';

router.get('/borrowed_books', getBorrowedBooks);


export default router;