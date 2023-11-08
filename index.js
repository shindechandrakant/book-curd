import { server } from "./server.js";
import { bookRoute } from "./routes/book.js";

server.use("/", (req, res, next) => {
  console.log("Global");
  next();
});

server.use("/api/v1/", bookRoute);
