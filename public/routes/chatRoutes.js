import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

router.get("/chat", (req, res) => {
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("chat message", (message) => {
      console.log("message: " + message);
      io.emit("chat message", message);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
  res.render("chat.ejs", { login: req.session.login, connected: false });
});

router.post("/chatlogin", function (req, res) {
  res.render("chat.ejs", {
    login: req.session.login,
    connected: true,
    pseudo: req.body.user,
  });
});

export default router;
