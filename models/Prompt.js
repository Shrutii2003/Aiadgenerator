const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
  {
    promptId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },

    promptText: {
      type: String,
      required: true
    },

    style: {
      type: String,
      default: "default"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prompt", promptSchema);
