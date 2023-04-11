import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

router.get("/home", function (req, res) {
  res.render("home.ejs");
});

// router.get("/chat", function (req, res) {
//   io.on("connection", function (socket) {
//     console.log("a user connected");
//     socket.on("disconnect", function () {
//       console.log("user disconected");
//     });

//     socket.on("chat-message", function (message) {
//       io.emit("chat-message", message);
//     });
//   });
//   res.render("chat.ejs");
// });



export default router;
