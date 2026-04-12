import express from "express";
import { createMember, deleteMember, getAllMembers, getMemberById, updateMemberById } from "../controllers/memberController.js";
import validate from "../validations/validate.js";
import { memberSchema } from "../validations/memberValidator.js";

const router = express.Router();


router.post("/members", validate, createMember);
router.get("/members", getAllMembers);
router.get("/members/:id", getMemberById);
router.put("/members/:id", validate, updateMemberById);
router.delete("/members/:id", deleteMember); 

export default router;