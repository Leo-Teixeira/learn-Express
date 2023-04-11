import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

router.get("/about", function (req, res) {
  res.render("about.ejs");
});

export default router;
