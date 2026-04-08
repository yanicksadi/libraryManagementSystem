import express from "express";
import { createMember, deleteMember, getAllMembers, getMemberById, updateMember } from "../controllers/memberControllers.js";
import validateMember from "../middlewares/inputValidator.js";

const router = express.Router();


router.post("/members", validateMember, createMember);
router.get("/members", getAllMembers);
router.get("/members/:id", getMemberById);
router.put("/members/:id", validateMember, updateMember);
router.delete("/members/:id", deleteMember); 

export default router;