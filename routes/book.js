import express from "express";
import {
  createBook,
  getBookById,
  getAllBooks,
  deleteBookById,
  updateBookById,
} from "../controllers/book.js";
const router = express.Router();

// get
router.get("/books", getAllBooks);
router.get("/book/:bookId", getBookById);

// delete
router.delete("/book/:bookId", deleteBookById);

// update
router.put("/book/:bookId", updateBookById);

// post
router.post("/book", createBook);

export { router as bookRoute };
