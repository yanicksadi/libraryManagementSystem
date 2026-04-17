import Joi from "joi";

export const authorSchema = Joi.object({
  name: Joi.string().min(2).required(),
});
