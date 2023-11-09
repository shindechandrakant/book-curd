const request = require("supertest");
const expect = require("chai").expect;

const BASE_URL = `http://localhost:7000/api/v1/`;

const newBookData = {
  ISBN_NO: "chandrakant-1",
  bookName: "new-1",
  authorName: "Chandrakant",
  summary: "This is um",
  publication: "Cs. Pub.",
};

const updateBookData = {
  ISBN_NO: "chandrakant-1",
  bookName: "new-1",
  authorName: "Chandrakant",
  summary: "This is updated Book",
  publication: "Cs. Pub.",
};

describe("Book API tests", (done) => {
  let bookId;
  let bookResponse;

  it("1. should create a book", (done) => {
    request(BASE_URL)
      .post(`book`)
      .send(newBookData)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.book).not.to.be.null;
        expect(res.body.book._id).not.to.be.null;
        expect(res.body.book.ISBN_NO).to.be.equal(newBookData.ISBN_NO);
        expect(res.body.book.bookName).to.be.equal(newBookData.bookName);
        expect(res.body.book.summary).to.be.equal(newBookData.summary);
        expect(res.body.book.publication).to.be.equal(newBookData.publication);
        if (err) throw err;
        bookResponse = res.body;
        bookId = res.body.book._id;
        done();
      });
  });

  console.log({ bookId });
  it("2. should get a book of the provide book Id", (done) => {
    request(BASE_URL)
      .get(`book/${bookId}`)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.book).not.to.be.null;
        expect(res.body.book._id).to.be.equal(bookResponse.book._id);
        expect(res.body.book.ISBN_NO).to.be.equal(bookResponse.book.ISBN_NO);
        expect(res.body.book.bookName).to.be.equal(bookResponse.book.bookName);
        expect(res.body.book.summary).to.be.equal(bookResponse.book.summary);
        expect(res.body.book.publication).to.be.equal(
          bookResponse.book.publication
        );
        expect(res.body.book.bookPublishedDate).to.be.equal(
          bookResponse.book.bookPublishedDate
        );
        expect(res.body.book.documentCreatedAt).to.be.equal(
          bookResponse.book.documentCreatedAt
        );
        if (err) throw err;
        done();
      });
  });

  it("3. should update a book & return a updated book values", (done) => {
    request(BASE_URL)
      .put(`book/${bookId}`)
      .send(updateBookData)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.book).not.to.be.null;
        expect(res.body.book._id).to.be.equal(bookId);
        expect(res.body.book.ISBN_NO).to.be.equal(updateBookData.ISBN_NO);
        expect(res.body.book.bookName).to.be.equal(updateBookData.bookName);
        expect(res.body.book.summary).to.be.equal(updateBookData.summary);
        expect(res.body.book.publication).to.be.equal(
          updateBookData.publication
        );
        if (err) throw err;
        done();
      });
  });

  it("4. should delete a book", (done) => {
    request(BASE_URL)
      .delete(`book/${bookId}`)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(204);
        if (err) throw err;
        done();
      });
  });
});
