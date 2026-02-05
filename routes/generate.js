import express from "express";
import { generateImage } from "../services/image.js";
import { generateText } from "../services/text.js";
import { composeImage } from "../services/compose.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const image = await generateImage(prompt);
    const caption = await generateText(prompt);
    const finalImage = await composeImage(image);

    res.json({
      success: true,
      caption,
      image: finalImage
    });
  } catch (error) {
    res.status(500).json({ error: "Generation failed" });
  }
});

export default router;