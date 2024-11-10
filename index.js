import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connect", (socket) => {
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log("server running at http://localhost:" + PORT);
});
