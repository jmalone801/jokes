const Jokes = require("../models/jokes.model");

// Returns all jokes
module.exports.findAllJokes = (req, res) => {
    Jokes.find({})
        .then(allTheJokes => res.json({ jokes: allTheJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Returns one joke
module.exports.findOneSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params._id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Returns one random joke
// module.exports.findOneRandomJoke = (req, res) => {
//     Jokes.find({})
//         .then((allJokes) => {
//             res.json({
//                 joke: allJokes[Math.floor(Math.random() * allJokes.length)]
//             })
//         })
//         .catch((err) => res.json({ message: 'Something went wrong', error: err }));
// };

// creates one new joke
module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Updates one joke
module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Deletes one joke
module.exports.deleteAnExistingJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};