const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    imageId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    promptId: { type: String, required: true },

    imageUrl: {
      type: String,
      required: true
    },

    watermarked: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
