const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.String, 
      ref: "User", 
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorite", favoriteSchema);