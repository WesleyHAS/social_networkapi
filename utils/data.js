const userData = [
  { username: "john_doe", email: "john.doe@example.com" },
  { username: "jane_smith", email: "jane.smith@example.com" },
  { username: "bob_jones", email: "bob.jones@example.com" },
];

const thoughtData = [
  {
    thoughtText: "Just had a great meal at my favorite restaurant!",
    username: "john_doe",
  },
  {
    thoughtText: "Excited to start a new project today!",
    username: "jane_smith",
  },
  {
    thoughtText: "Reflecting on a relaxing weekend getaway.",
    username: "bob_jones",
  },
];

const reactionData = [
  { reactionBody: "That sounds delicious!", username: "jane_smith" },
  { reactionBody: "I love weekend getaways!", username: "john_doe" },
  { reactionBody: "Tell me more about the project!", username: "bob_jones" },
];

module.exports = { userData, thoughtData, reactionData };
