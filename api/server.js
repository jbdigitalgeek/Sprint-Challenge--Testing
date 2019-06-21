const express = require("express");

const games = require("../data/games/gamesModel");
const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get("/games", async (req, res) => {
    games
    .find()
    .then(newGames => {
        res
        .status(200)
        .json(newGames);
    })
    .catch(err => {
        res
            .status(500)
            .json({ err: 'Could not retrieve games from database' });
    });
}); 


server.get("/games", async (req, res) => {
  const rows = await games.find();

  res.status(200).json(rows);
});

server.post("/games", (req, res) => {
  const game = req.body;
  const { genre, title } = game;

  if (title && genre) {
    games.add(game)
      .then(newGame => {
        res.status(201).json(newGame);
      })
      .catch(err => {
        res.status(500).json({ err: "Failed to insert game!" });
      });
  } else if (!title) {
    res.status(422).json({ err: "Bad request (check title)" });
  } else if (!genre) {
    res.status(422).json({ err: "Bad request (check genre)" });
  } else {
    res.status(500).json({ err: "Failed to add game" });
  }
});

module.exports = server;
