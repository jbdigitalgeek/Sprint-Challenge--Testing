const db = require("../dbConfig");

module.exports = {
  add,
  find
};

function add (newGame) {
    return db('games')
        .insert(newGame)
        .into('games');
}

function find() {
  return db("games");
}


