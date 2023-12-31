import { client } from "../db/dbConnection.js";
import { Schema } from "mongoose";

const bookSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  ISBN_NO: {
    type: String,
    trim: true,
  },
  bookName: {
    type: String,
    required: true,
    trim: true,
    max: 100,
  },
  authorName: {
    type: [String],
  },
  summary: {
    type: String,
    max: 1000,
    trim: true,
    required: true,
  },
  publication: {
    type: String,
    max: 100,
  },
  bookLastModifiedDate: {
    type: Date,
  },
  bookPublishedDate: {
    type: Date,
  },
  documentCreatedAt: {
    type: Date,
    default: Date.now,
  },
  documentModifiedAt: {
    type: Date,
  },
});

const BookModel = client.model("Book", bookSchema);

export { BookModel };
