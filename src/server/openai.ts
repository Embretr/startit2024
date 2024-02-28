import { env } from "../env";
import OpenAi from "openai";
import fetchFakturaQueries from "./fetch_faktura_queries";

const openAi = new OpenAi({
  apiKey: env.OPENAI_API_KEY,
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
    Additionally, you should provide a title and a description for the recommended action. The title should be a short summary of the recommended action and the description should provide more details about the recommended action.
    All text returned by you should be in Norwegian. ALWAYS REPLY IN NORWEGIAN.
    Please refer to the data from the user input used when answering the question. 
    Once you use an action id, it cannot be repeated. DO NOT recommend the same action multiple times.
    Recommend between 1 and 3 actions.

    The list of actions are as follows:
    - actionId: 1001, action: Send a reminder email for the invoice.
    - actionId: 1002, action: Send a marketing email.
    - actionId: 1003, action: Send a thank you email.
    - actionId: 1004, action: Generate an invoice.
    - actionId: 1005, action: Generate a report based on the most promising customers.
    - actionId: 1006, action: Generate a report based on the least promising customers.
    - actionId: 1007, action: Generate a analyze based on the profits of the company.

    The format should be as the following example:
    {
      statusCode: 200,
      actions: [
        { 
          title: "Kunde(ne) med kundenummer 10328 har 3 ubetalte fakturaer.",
          description: "Du bør sende en påminnelse på e-post til denne klienten.",
          actionId: 1001
        },
        { 
          title: "Kunde med kundenummer 22838 har ikke brukt tjenesten på en stund.",
          description: "Du bør sende en markedsførings-e-post til denne klienten.",
          actionId: 1002
        },
        { 
          title: "Kunden med kundenummer 29383 er den mest lønnsomme kunden din.",
          description: "Generer en rapport basert på denne kunden.",
          actionId: 1005
        },
      ]
    }

    If you can't answer the question your answer should be:
    {
      statusCode: 404,
      actionId: null
    }
  `;

  const USER_CONTENT = await fetchFakturaQueries();

  const completion = await openAi.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_CONTENT
      },
      {
        role: "user",
        content: USER_CONTENT
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
    top_p: 0.1
  });

  return completion.choices[0].message.content;
};
