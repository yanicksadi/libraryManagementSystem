import express from "express";
import {
  getBorrowedBooks,
  createBorrow
} from "../controllers/borrowController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Borrow
 *   description: Borrow management
 */

/**
 * @swagger
 * /api/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [Borrow]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Borrow'
 *     responses:
 *       201:
 *         description: Book borrowed
 */
router.post("/borrow", createBorrow);

/**
 * @swagger
 * /api/borrowed-books:
 *   get:
 *     summary: Get borrowed books
 *     tags: [Borrow]
 *     responses:
 *       200:
 *         description: List of borrowed books
 */
router.get("/borrowed-books", getBorrowedBooks);

export default router;