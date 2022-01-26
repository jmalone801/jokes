const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// This is where we import the users routes function from our user.routes.js file
require("./server/routes/jokes.routes");

// This is where we import the jokes routes function from our jokes.routes.js file
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

// This needs to at the bottom
app.listen( port, () => console.log(`Hey James, its me, your server. Im listening on port: ${port}`) );