const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Setting the default port for the server to listen on
const PORT = process.env.PORT || 3001;
// Creating an instance of the express application
const app = express();

// Middleware for parsing incoming URL-encoded request data
app.use(express.urlencoded({ extended: true }));
// Middleware for parsing incoming request data in JSON format
app.use(express.json());
// Using the defined routes for the application
app.use(routes);

db.once("open", () => {
  // Starting the server and listening on the specified port
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
