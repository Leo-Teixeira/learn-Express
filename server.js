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
import home from "./public/routes/homeRoute.js";
import chat from "./public/routes/chatRoutes.js";
import chapter from "./public/routes/chapterRoutes.js";
import error from "./public/routes/errorRoute.js";
import redirect from "./public/routes/redirectRoute.js";
import restApi from "./public/routes/restApiRoutes.js";
import about from "./public/routes/aboutRoute.js";

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
app.use(home);
app.use(chat);
app.use(chapter);
app.use(error);
app.use(redirect);
app.use(restApi);
app.use(about);

app.get("/", (req, res) => {
  res.render("connect.ejs");
});

server.listen(8080, function () {
  console.log("Server is listening on : 8080");
});
