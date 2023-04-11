import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

const data = {
  authors: [
    { id: 1, firstName: "Tom", lastName: "Coleman" },
    { id: 2, firstName: "Sashko", lastName: "Stubailo" },
    { id: 3, firstName: "Mikhail", lastName: "Novikov" },
  ],
  posts: [
    { id: 1, authorId: 1, title: "Introduction to GraphQL", votes: 2 },
    { id: 2, authorId: 2, title: "Welcome to Meteor", votes: 3 },
    { id: 3, authorId: 2, title: "Advanced GraphQL", votes: 1 },
    { id: 4, authorId: 3, title: "Launchpad is Cool", votes: 7 },
  ],
};

router.get("/rest", function (req, res) {
  res.render("rest.ejs", { data });
});

router.get("/rest/authors", function (req, res) {
  fetch("https://formation.anjousoft.fr/Webservice/ressources/data.json", {})
    .then(function (response) {
      console.log("response", response);
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      res.render("rest.ejs", { authors: jsonData["authors"] });
    });
});

router.get("/rest/posts", function (req, res) {
  res.render("rest.ejs");
});

router.get("/rest/authors/:id", function (req, res) {
  res.render("rest.ejs");
});

router.get("/rest/posts/:id", function (req, res) {
  res.render("rest.ejs");
});

router.get("/rest/authors/:id/posts", function (req, res) {
  res.render("rest.ejs");
});

export default router;
