const { Schema, model } = require("mongoose");
const { reactionSchema } = require("./Reaction"); // Import the reactionSchema

// Thought Schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Array of nested documents (reactions)
});

// Virtual to get the length of the thought's reactions array
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Getter method to format the timestamp on query
thoughtSchema.path("createdAt").get(function (value) {
  // Format the timestamp as needed
  return /* your formatting logic */;
});

// Now you can create a model using the schema
const Thought = model("thought", thoughtSchema);

// Export the Thought model
module.exports = Thought;
