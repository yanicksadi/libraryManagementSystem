import express from "express";
import { createAuthor, getAllAuthors } from "../controllers/authorController.js";

const router = express.Router();

router.post("/authors", createAuthor);
router.get("/authors", getAllAuthors);

export default router;