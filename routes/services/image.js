import axios from "axios";

export async function generateImage(prompt) {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
    { inputs: prompt },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_KEY}`,
      },
      responseType: "arraybuffer",
    }
  );

  return response.data;
}