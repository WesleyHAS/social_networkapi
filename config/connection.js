// Importing the necessary modules from the 'mongoose' package
const { connect, connection } = require("mongoose");

// Defining the MongoDB connection string
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialDB";

// Establishing a connection to the MongoDB server
connect(connectionString);

// Exporting the 'connection'
module.exports = connection;
