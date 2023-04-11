import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
import { sendChat, receptMessage, receptMessageService } from "../js/chat.js";

router.get("/chat", (req, res) => {
  res.render("chat.ejs", { login: req.session.login });
});

export default router;
