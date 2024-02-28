import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "../_components/button";
import Header from "../_components/header";
import MagicCard from "../_components/magic-card";
import SaldoTable from "../_components/saldo-table";

const stats = [
  { name: "Inntjeninger", stat: "790,994 kr." },
  { name: "Inn på konto", stat: "1,120,945 kr." },
  { name: "Ut av konto", stat: "329,951 kr." },
];
export default async function Home() {
  return (
    <div className="h-[200vh] p-6">
      <Header
        title="Saldo- og balanse"
        breadcrumb={["Hjem", "Saldo- og balanse"]}
        primaryCta={
          <Button>
            Avstem mot regnksap{" "}
            <DocumentArrowDownIcon className="ml-2 h-5 w-5" />
          </Button>
        }
      />
      <MagicCard />
      <div className="">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Siste 3 måneder
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <SaldoTable />
    </div>
  );
}
