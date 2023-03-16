import express from "express";
const router = express.Router();

router.get("/connect", function (req, res) {
  res.render("connect.ejs");
});

router.post("/connect", (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  if (login === "admin" && password === "admin") {
    req.session.login = login;
    res.redirect("/404");
  } else {
    res.render("connect.ejs", { message: "Identifiants incorrects" });
  }
});

router.get("/deconnect", function (req, res) {
  res.render("404.ejs");
});

export default router;
