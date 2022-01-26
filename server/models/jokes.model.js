const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "Setup is mandatory"],
        minlength: [10, "Setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is a must"],
        minlength: [3, "Punchline gotta be 3 characters at least"]
    }
},
    { timestamps: true }
)
const Jokes = mongoose.model("Jokes", JokeSchema);

module.exports = Jokes;