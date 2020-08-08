// Required modules
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

//Setting Port with prep for Heroku
const PORT = process.env.PORT || 3000;

//Setting up routes for api and html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// If deployed, connect to MongoLab, otherwise connect to localhost
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
