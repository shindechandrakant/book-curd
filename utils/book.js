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

const doesBookExistUtil = async (bookId) => {
  try {
    return await BookModel.exists({ _id: bookId });
  } catch (err) {
    console.log(
      `Something went wrong while checking bookExist. Error: ${err.message}`
    );
    throw err;
  }
};

const updateBookDetailUtil = async (updatedBook) => {
  try {
    const updatedResult = await BookModel.findByIdAndUpdate(
      { _id: updatedBook._id },
      updatedBook,
      {
        new: true,
      }
    );
    return updatedResult;
  } catch (err) {
    console.log(`Error occured while updating book. ${err.message}`);
    throw err;
  }
};

const deleteBookByIdUtil = async (bookId) => {
  try {
    await BookModel.findOneAndDelete({ _id: bookId });
  } catch (err) {
    console.log(`Error occured while deleting book. ERROR : ${err.message}`);
  }
};

export {
  saveModelInDbUtil,
  getBookByIdUtil,
  getAllBooksUtil,
  doesBookExistUtil,
  updateBookDetailUtil,
  deleteBookByIdUtil,
};
