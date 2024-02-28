import OpenAI from "openai";
import { env } from "../env";

const openAi = new OpenAI({
  apiKey: env.OPEN_API_KEY,
});
export default openAi;

async function main() {
  const completion = await openAi.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}