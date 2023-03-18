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
    res.redirect("/home");
  } else {
    res.render("connect.ejs", { message: "Identifiants incorrects" });
  }
});

router.get("/deconnect", function (req, res) {
  req.session.destroy(() => {
    res.redirect("/connect");
  });
});

export default router;
