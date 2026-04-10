import {Book, Author} from "../models/index.js"

//  create a book

export const createBook = async(req, res, next) => {
  try {
    const {title, author_id} = req.body;

    const book = await Book.create ({
      title,
      author_id,
    });
    res.status(201).json(book);
  } catch(error){
    next(error);
  }
}

// get all books

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.findAll({
      include: [
        {model: Author, attributes: ["name"],} ],
    });

    res.status(200).json(books)
  } catch (error){
    next(error);
  }
};