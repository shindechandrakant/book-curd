import { BookModel } from "../models/Book.js";
import { saveModelInDbUtil } from "../utils/book.js";
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
    return res.status(204).json({});
  } catch (error) {
    console.error(`Got error while Saving Book. \n Error: ${error.message}`);
    return res.status(500).json({
      message: "Unable to save New Book",
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {};

export { createBook, getBookById };
