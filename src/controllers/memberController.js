import Member from "../models/Member.js";

//Standardized Response function

const handleResponse = (res, status,message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

// creating a member

export const createMember = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const newMember = await Member.create( { name, email });
    handleResponse(res, 201, "Member created successfully", newMember);
  } catch (err) {
    next(err);
  }
};

// get all members

export const getAllMembers = async (req, res, next) => {

  try {
    const members = await Member.findAll();
    handleResponse(res, 200, "Members fetched successfully", members);
  } catch (err) {
    next(err);
  }
};

// get member by their Id

export const getMemberById = async (req, res, next) => {
  try {
    const member = await Member.findByPk(req.params.id);

    if(!member) {
      return handleResponse(res, 404, "Member not found");
    }

    handleResponse(res, 200, "Member fetched Successfully", member);
  } catch (err){
    next(err);
  }
};

// update the Member

export const updateMemberById = async (req, res, next) => {
  const {name, email} = req.body;
  
  try {
    const member = await Member.findByPk(req.params.id);
    
    if(!member){
      return handleResponse(res, 404, "Member not found");
    }
    
    await member.update({ name, email });

    handleResponse(res, 200, "Member is Updated Successfully", member)
  } catch(err){
    next(err);
  }
};

// Delete Member
export const deleteMember = async (req, res, next) => {
  try {
    const member = await Member.findByPk(req.params.id);

    if(!member){
      return handleResponse(res, 404, "Member not found");
    }

    await member.destroy();

    handleResponse(res, 200, "Member deleted successfully")
  } catch(err){
    next(err);
  }
};