import Author from "../models/Author.js";

// create author

export const createAuthor = async(req, res, next) => {

  try {
    const { name } = req.body;

    const author = await Author.create({ name });
    
    res.status(201).json(author);
  } catch (error){
    next(error);
  }
};

// get all authors
export const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch(error){
    next(error);
  }
};