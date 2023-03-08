import express from "express";
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.render("404.ejs");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

// module.exports = router;
export default router;
