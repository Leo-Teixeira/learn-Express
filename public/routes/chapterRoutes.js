import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

router.get("/chapter/:numeroChapitre", (req, res) => {
  const numeroChapitre = req.params.numeroChapitre;
  res.render("chapter.ejs", { numeroChapitre: numeroChapitre });
});

router.get("/download", function (req, res) {
  const filePath = path.join(__dirname, "../assets/clement.txt");
  res.download(filePath);
});

export default router;
