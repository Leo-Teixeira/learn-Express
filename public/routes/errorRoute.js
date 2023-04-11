import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

router.get("/404", function (req, res) {
  res.render("404.ejs");
});

export default router;
