import { env } from "../env";
import OpenAi from "openai";

const openAi = new OpenAi({
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


export const promptInvoice = async () => {
  const SYSTEM_CONTENT = `
    You are an asssitant that helps with invoices. You will recieve content from a user listing
    a set of results, in JSON format, from a database for a given companie's outgoing invoices. Your task is to provide a response in JSON format which recommends the best actions (with the corresponding ID) to take based on the data.

    The list of actions are as follows:
    - ID: 1001, action: Send a reminder email for the invoice.
    - ID: 1002, action: Send a marketing email.
    - ID: 1003, action: Send a thank you email.
    - ID: 1004, action: Generate an invoice.
    - ID: 1005, action: Generate a report based on the most promising customers.
    - ID: 1006, action: Generate a report based on the least promising customers.

    The format should be as follows:
    {
      statusCode: 200,
      actionId: 1001
    }

    If you can't answer the question your answer should be:
    {
      statusCode: 404,
      actionId: null
    }
  `;

  const USER_CONTENT = `
    Number of unpaid reminders per customer by customer id: 
    
  `;

  const completion = await openAi.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_CONTENT
      },
      {
        role: "user",
        content: USER_CONTENT
      }
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" }
  });

};