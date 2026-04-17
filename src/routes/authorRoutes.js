import express from "express";
import { createAuthor, getAllAuthors } from "../controllers/authorController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Author management
 */

/**
 * @swagger
 * /api/authors:
 *   post:
 *     summary: Create an author
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Author'
 *     responses:
 *       201:
 *         description: Author created
 */
router.post("/authors", createAuthor);

/**
 * @swagger
 * /api/authors:
 *   get:
 *     summary: Get all authors
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: List of authors
 */
router.get("/authors", getAllAuthors);

export default router;