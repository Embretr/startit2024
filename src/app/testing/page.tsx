import { api } from "../../trpc/server";

export default async function TestingPage() {
  const result = await api.faktura.fetchfak.query();

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
