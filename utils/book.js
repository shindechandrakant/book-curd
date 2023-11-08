import { BookModel } from "../models/Book.js";

const saveModelInDbUtil = async (model) => {
  try {
    await model.save();
  } catch (error) {
    throw error;
  }
};

const getBookByIdUtil = async (bookId) => {
  const book = await BookModel.findById(bookId);
  return book;
};

const getAllBooksUtil = async () => {
  const books = await BookModel.find();
  return books;
};

export { saveModelInDbUtil, getBookByIdUtil, getAllBooksUtil };
