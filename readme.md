# Books CURD API

- #### Tool/Tech stack used

  ```
      node js
      MongoDb
      express
      MongoDB Atlas
      Chai
      Supertest
  ```

- ### To Setup/Run locally
  1. Clone this repository using this command
     ```bash
         git clone https://github.com/shindechandrakant/book-curd/
     ```
  2. Go to cloned directory & then run command
     ```bash
         npm install
     ```
  3. Create `.env` file file in directory
  4. Copy following variable names & assign values to it
     ```js
         SERVER_PORT=
         MONGO_DB_URL=
         BASE_URL=
     ```
  5. Open `cmd` Run to following command to start server
     ```bash
         npm start
     ```
  6. To run test cases run following command in `cmd`
     ```
         npm test
     ```
     note: keep server running

##

### Test Cases

```js
    PASS  test/book.test.js
    Book API tests
        √ 1. should create a book (361 ms)
        √ 2. should get a book of the provide book Id (258 ms)
        √ 3. should update a book & return a updated book values (485 ms)
        √ 4. should delete a book (482 ms)
        √ 5. should return a list of books (236 ms)
        √ 6. should return list of books & all books should have a properties (249 ms)
    Book API Edge Case tests
        √ 1. should return 404 on get book by id if not exist id passed (242 ms)
        √ 2. should return 404 on delete book by id if not exist id passed (244 ms)
        √ 3. should return 404 on update book by id if not exist id passed (253 ms)

    Test Suites: 1 passed, 1 total
    Tests:       9 passed, 9 total
    Snapshots:   0 total
    Time:        3.94 s, estimated 9 s
    Ran all test suites.

```

### API Endpoints

```js
    BASE_URL= http://localhost:7000
```

```curl
    There is postman collectio file named Book.postman_collection.json in root folder. export it into Postman to use endpoints
```

1. To Create a new book use following end point

   ```js
       method - POST
       URL- {{BASE_URL}}/api/v1/book
       body - json body
       {
           "ISBN_NO": "ISBN_12",
           "bookName": "Clean Code",
           "authorName": "Uncle BOB",
           "summary": "A home of programmers",
           "publication": "Cs. Pub."
       }
       Response: it will return a newly created object.
           status code: 200
           Body: {
               "message": "Book Created Successfully",
               "book": {
                   "_id": "JnAN5_Q6Nq",
                   "ISBN_NO": "ISBN_12",
                   "bookName": "Clean Code",
                   "authorName": [
                       "Uncle BOB"
                   ],
                   "summary": "A home of programmers",
                   "publication": "Cs. Pub.",
                   "documentCreatedAt": "2023-11-09T15:53:14.596Z",
                   "__v": 0
               }
           }
   ```

2. To get a specific book using id Endpoint

   ```js
       method - GET
       URL- {{BASE_URL}}/api/v1/book/{{BookId}}
       body - none
       - Response: if book Exist
           status code: 200
           Body: {
                "message": "Book Found",
                "book": {
                    "_id": "Thu952HLPj",
                    "ISBN_NO": "ISBN_12",
                    "bookName": "Clean Code",
                    "authorName": [
                        "Uncle BOB"
                    ],
                    "summary": "A home of programmers",
                    "publication": "Cs. Pub.",
                    "documentCreatedAt": "2023-11-09T15:56:36.177Z",
                    "__v": 0
                }
            }
        - Response on Invalid BookId
            status code : 404
            Body: {
                "message": "Book for id : {{BookId}} dosen't exist"
            }
   ```

3. To get a list of book

   ```js
       method - GET
       URL- {{BASE_URL}}/api/v1/books
       body - none
       - Response: if book Exist
           status code: 200
           Body: [
                {
                    "book": {
                        "_id": "Thu952HLPj",
                        "ISBN_NO": "ISBN_12",
                        "bookName": "Clean Code",
                        "authorName": [
                            "Uncle BOB"
                        ],
                        "summary": "A home of programmers",
                        "publication": "Cs. Pub.",
                        "documentCreatedAt": "2023-11-09T15:56:36.177Z",
                        "__v": 0
                    }
                }
            ]
        - Response on Invalid BookId
            status code : 404
            Body: {
                "message": "Book for id : {{BookId}} dosen't exist"
            }
   ```

4. To Create a update book using bookId endPoint

   ```js
       method - PUT
       URL- {{BASE_URL}}/api/v1/book/{{BookId}}
       body - json body
       {
           "ISBN_NO": "ISBN_12",
           "bookName": "Clean Code",
           "authorName": "Uncle BOB",
           "summary": "A home of programmers",
           "publication": "Cs. Pub."
       }
       Response: it will return a newly created object.
           status code: 200
           Body: {
               "message": "Book Updated Successfully",
               "book": {
                   "_id": "JnAN5_Q6Nq",
                   "ISBN_NO": "ISBN_12",
                   "bookName": "Clean Code",
                   "authorName": [
                       "Uncle BOB"
                   ],
                   "summary": "A home of programmers",
                   "publication": "Cs. Pub.",
                   "documentCreatedAt": "2023-11-09T15:53:14.596Z",
                   "__v": 0
               }
           }
   ```

5. To delete book using bookId endPoint

   ```js
       method - DELETE
       URL- {{BASE_URL}}/api/v1/book/{{BookId}}
       body - none
       Response:
           body: No Content
           status code: 204
   ```
