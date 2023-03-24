import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

router.get("/home", function (req, res) {
  res.render("home.ejs");
});

router.get("/404", function (req, res) {
  res.render("404.ejs");
});

router.get("/chat", function (req, res) {
  io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on("disconnect", function () {
      console.log("user disconected");
    });

    socket.on("chat-message", function (message) {
      io.emit("chat-message", message);
    });
  });
  res.render("chat.ejs");
});

router.get("/about", function (req, res) {
  res.render("about.ejs");
});

router.get("/chapter/:numeroChapitre", (req, res) => {
  const numeroChapitre = req.params.numeroChapitre;
  res.render("chapter.ejs", { numeroChapitre: numeroChapitre });
});

router.get("/download", function (req, res) {
  const file = `/assets/clement.txt`;
  res.download(file);
  res.redirect("/home");
});

router.get("/redirect", function (req, res) {
  res.render("redirect.ejs");
});

export default router;
