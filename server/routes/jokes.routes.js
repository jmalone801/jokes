const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    // Returns all jokes
    app.get("/api/jokes/", JokesController.findAllJokes);

    // Returns one joke
    app.get("/api/jokes/:_id", JokesController.findOneSingleJoke);

    // Returns one random joke
    // app.get("/api/jokes/random", JokesController.findOneRandomJoke);

    // creates one new joke
    app.post("/api/jokes/new", JokesController.createNewJoke);

    // Updates one joke
    app.put("/api/jokes/update/:_id", JokesController.updateExistingJoke);

    // Deletes one joke
    app.delete("/api/jokes/delete/:_id", JokesController.deleteAnExistingJoke);
};