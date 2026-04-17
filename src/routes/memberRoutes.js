import express from "express";
import {
  createMember,
  getAllMembers
} from "../controllers/memberController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: Member management
 */

/**
 * @swagger
 * /api/members:
 *   post:
 *     summary: Create a member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Member'
 *     responses:
 *       201:
 *         description: Member created
 */
router.post("/members", createMember);

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: List of members
 */
router.get("/members", getAllMembers);

export default router;