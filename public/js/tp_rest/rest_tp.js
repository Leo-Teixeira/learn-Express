import express from "express";
const app = express();
const router = express.Router();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);

// Exemple de récupération de tous les utilisateurs
app.get("/rest/authors", (req, res) => {
  fetch("https://formation.anjousoft.fr/Webservice/ressources/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      res.render("rest.ejs", { authors: jsonData["authors"] });
    });
});

// Exemple d'ajout d'un utilisateur
app.post("/api/users", (req, res) => {
  const user = req.body;
  // Ajouter l'utilisateur à la base de données
  res.send("Utilisateur ajouté avec succès");
});

// Exemple de mise à jour d'un utilisateur
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  // Mettre à jour l'utilisateur dans la base de données
  res.send("Utilisateur mis à jour avec succès");
});

// Exemple de suppression d'un utilisateur
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  // Supprimer l'utilisateur de la base de données
  res.send("Utilisateur supprimé avec succès");
});
