const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// Reaction Schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  // allows for virtuals
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// // Getter method to format the timestamp on query
// reactionSchema.path("createdAt").get(function (value) {
//   // Format the timestamp as needed
//   return /* your formatting logic */;
// });

const Reaction = model("Reaction", reactionSchema);

// Export the Reaction schema
module.exports = Reaction;
