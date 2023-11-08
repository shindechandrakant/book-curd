import express from "express";
import {
  createBook,
  getBookById,
  getAllBooks,
  deleteBookById,
} from "../controllers/book.js";
const router = express.Router();

///api/v1/
router.get("/books", getAllBooks);
router.get("/book/:bookId", getBookById);
router.delete("/book/:bookId", deleteBookById);
router.post("/book", createBook);

export { router as bookRoute };
