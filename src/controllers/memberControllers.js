import {
  createMemberService, getAllMembersService, getMemberByIdService, updateMemberService, deleteMemberService
} from "../models/memberModel.js"

//Standized Response function

const handleResponse = (res, status, message , data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createMember = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newMember = await createMemberService(name, email);
    handleResponse(res, 201, "Member created successfully", newMember)
  } catch(err){
    next(err);
  }
};

export const getAllMembers = async (req, res, next) => {
  try {
    const member = await getAllMembersService();
    handleResponse(res, 200, "Members fetched successfully", member)
  } catch(err){
    next(err);
  }
};

export const getMemberById = async (req, res, next) => {
  try {
    const member = await getMemberByIdService(req.params.id);
    if (!member) return handleResponse(res, 404, "member not found");
    handleResponse(res, 200, "Member Fetched successfully", member);
  } catch (err){
    next(err);
  }
};


export const updateMember = async (req, res, next) => {
  const {name, email} = req.body;
  try {
    const updatedMember = await updateMemberService(req.params.id, name, email);
    if(!updatedMember) return handleResponse(res, 404, "Member not found");
    handleResponse(res, 200, "Member Updated Successfully", updatedMember)
  } catch(err){
    next(err);
  }
};


export const deleteMember = async(req, res, next) => {
  try{
    const deletedMember = await deleteMemberService(req.params.id);
    if (!deletedMember) return handleResponse(res, 404, "Member not found");
    handleResponse(res, 200, "Member deleted Successfully", deletedMember)
  }catch(err){
    next(err)
  }
}