import sharp from "sharp";
import fs from "fs";

export async function composeImage(imageBuffer) {
  const output = "output.png";

  await sharp(imageBuffer)
    .resize(512, 512)
    .toFile(output);

  return output;
}