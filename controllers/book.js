import { BookModel } from "../models/Book.js";
import {
  getBookByIdUtil,
  saveModelInDbUtil,
  getAllBooksUtil,
} from "../utils/book.js";
import { nanoid } from "nanoid";

const createBook = async (req, res) => {
  const {
    ISBN_NO,
    bookName,
    authorName,
    summary,
    publication,
    bookLastModifiedDate,
    bookPublishedDate,
  } = req.body;

  const book = new BookModel({
    _id: nanoid(10),
    ISBN_NO: ISBN_NO,
    bookName: bookName,
    authorName: authorName,
    summary: summary,
    publication: publication,
    bookLastModifiedDate: bookLastModifiedDate,
    bookPublishedDate: bookPublishedDate,
  });

  try {
    await saveModelInDbUtil(book);
    return res.status(200).json({
      message: "Book Created Successfully",
      book,
    });
  } catch (error) {
    console.error(`Got error while Saving Book. \n Error: ${error.message}`);
    return res.status(500).json({
      message: "Unable to save New Book",
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  const { bookId } = req.params;

  if (!bookId) {
    return res.status(400).json({
      message: "BookId is missing in URL",
    });
  }

  const book = await getBookByIdUtil(bookId);
  if (!book) {
    return res.status(404).json({
      message: `Book for id : ${bookId} dosen't exist`,
    });
  }

  return res.status(200).json({
    message: "Book Found",
    book,
  });
};

const getAllBooks = async (req, res) => {
  const books = await getAllBooksUtil();
  return res.status(200).json({
    books,
  });
};

const updateBookById = async (req, res) => {
  const { bookId } = req.params;

  if (!bookId) {
    return res.status(400).json({
      message: "BookId is missing in URL",
    });
  }

  const doesBookExit = await BookModel.exists({ _id: bookId });

  if (!doesBookExit) {
    return res.status(404).json({
      message: `Book for id : ${bookId} dosen't exist`,
    });
  }

  const {
    ISBN_NO,
    bookName,
    authorName,
    summary,
    publication,
    bookLastModifiedDate,
    bookPublishedDate,
  } = req.body;

  const book = new BookModel({
    _id: bookId,
    ISBN_NO: ISBN_NO,
    bookName: bookName,
    authorName: authorName,
    summary: summary,
    publication: publication,
    bookLastModifiedDate: bookLastModifiedDate,
    bookPublishedDate: bookPublishedDate,
  });
};

const deleteBookById = async (req, res) => {
  const { bookId } = req.params;

  if (!bookId) {
    return res.status(400).json({
      message: "BookId is missing in URL",
    });
  }

  const doesBookExit = await BookModel.exists({ _id: bookId });
  if (!doesBookExit) {
    return res.status(404).json({
      message: `Book for id : ${bookId} dosen't exist`,
    });
  }

  try {
    await BookModel.findOneAndDelete({ _id: bookId });
    return res.status(204).json({});
  } catch (err) {
    return res.status(500).json({
      message: "Unable to delete book",
      error: err.message,
    });
  }
};

export { createBook, getBookById, getAllBooks, updateBookById, deleteBookById };
