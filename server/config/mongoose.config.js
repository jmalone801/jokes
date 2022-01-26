const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Aye you're connected to MongoDB!!!"))
	.catch(err => console.log("Aw poop rou are no longer connected to MongoDB", err));