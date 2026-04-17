import Joi from "joi";

export const bookSchema = Joi.object({
  title: Joi.string().min(2).required(),
  author_id: Joi.number().integer().required 
})