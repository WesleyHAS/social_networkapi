// const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

const { userData, thoughtData, reactionData } = require("./data");

const db = require("../config/connection");

db.once("open", async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    // Create users
    const users = await User.create(userData);

    // Create thoughts
    const thoughts = await Thought.create(thoughtData);

    // Create reactions
    const reactions = await Reaction.create(reactionData);

    // Assign thoughts and reactions to users
    // (similar to the previous example)

    console.log("Seed data inserted successfully!");
    console.table(users);
    console.table(thoughts);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
