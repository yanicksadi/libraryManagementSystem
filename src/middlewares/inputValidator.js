import joi from "joi";

const memberScheme =  joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
});

const validateMember = (req, res, next) => {
  const { error } = memberScheme.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  next();
};

export default validateMember;