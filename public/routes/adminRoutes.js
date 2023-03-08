import express from "express";
const router = express.Router();

router.get("/connect", function (req, res) {
  res.render("connect.ejs");
});

router.get("/deconnect", function (req, res) {
  res.render("404.ejs");
});

export default router;
