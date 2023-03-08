import express from "express";
const router = express.Router();

router.get("/404", function (req, res) {
  res.render("404.ejs");
});

router.get("/chat", function (req, res) {
  res.render("chat.ejs");
});

router.get("/about", function (req, res) {
  res.render("about.ejs");
});

export default router;
