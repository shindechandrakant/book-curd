import { server } from "./server.js";
import { bookRoute } from "./routes/book.js";

server.use("/api/v1/", bookRoute);
