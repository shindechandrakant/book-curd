import 'dotenv/config'
import express from 'express';
const server = express();


const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => console.log(`Server is Up on PORT ${PORT}🚀`));


export {server};