import express from "express";
import session from "express-session";
// import ejs from "ejs";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", "./screen");
app.set("view engine", "ejs");

import auth from "./public/routes/adminRoutes.js";
import menu from "./public/routes/menuRoutes.js";

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "clef_secrete",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(__dirname + "/public"));
app.use(auth);
app.use(menu);

app.get("/error", (req, res) => {
  res.render("404");
});

// io.on("connection", function (socket) {
//   console.log("a user connected");
//   socket.on("disconnect", function () {
//     console.log("user disconected");
//   });

//   socket.on("chat-message", function (message) {
//     io.emit("chat-message", message);
//   });
// });

server.listen(8080, function () {
  console.log("Server is listening on : 8080");
});
