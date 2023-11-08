import "dotenv/config";
import express from "express";
import bodyParse from "body-parser";
const server = express();

const PORT = process.env.SERVER_PORT;

server.use(bodyParse.urlencoded({ extended: false }));
server.use(bodyParse.json());
server.use(express.json());

server.listen(PORT, () => console.log(`Server is Up on PORT ${PORT}🚀`));

export { server };
