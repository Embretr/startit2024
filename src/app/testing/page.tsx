import { api } from "../../trpc/server";

export interface AIFakturaResponse {
  actions: Actions;
}

export interface Actions {
  statusCode: number;
  actions: Action[];
}

export interface Action {
  title: string;
  description: string;
  actionId: number;
}

export default async function TestingPage() {
  const result = await api.faktura.fetchfak.query();
  const chat = await api.ai.getInvoiceActions.query();

  console.log(chat);

  return (
    <div>
      <h1>Testing Page</h1>
      <pre>
        {JSON.stringify(
          result,
          (key, value) =>
            typeof value === "bigint" ? value.toString() : value,
          2,
        )}
      </pre>
    </div>
  );
}
