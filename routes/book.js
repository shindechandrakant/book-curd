import express from "express";
import { createBook, getBookById } from "../controllers/book.js";
const router = express.Router();

///api/v1/

router.get("/book", (req, res) =>
  res.status(200).json({
    msg: "OK3",
  })
);

router.post("/book", createBook);

export { router as bookRoute };
