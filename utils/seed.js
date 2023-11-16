const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const { generateUser, generateThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  // Delete the collections if they exist
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  // Generate users and thoughts data
  const users = generateUser();
  const thoughts = generateThoughts(20);

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
