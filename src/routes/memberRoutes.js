import express from "express";
import { createMember, deleteMember, getAllMembers, getMemberById, updateMemberById } from "../controllers/memberController.js";
import validateMember from "../middlewares/inputValidator.js";

const router = express.Router();


router.post("/members", validateMember, createMember);
router.get("/members", getAllMembers);
router.get("/members/:id", getMemberById);
router.put("/members/:id", validateMember, updateMemberById);
router.delete("/members/:id", deleteMember); 

export default router;