const people = [
  {
    name: "1070",
    title: "Utsatt skattefordel",
    in: "1 000 000 kr.",
    change: "0 kr.",
    out: "1 000 000 kr.",
  },
  {
    name: "2000",
    title: "Lønnskostnad",
    in: "500 000 kr.",
    change: "100 000 kr.",
    out: "400 000 kr.",
  },
  {
    name: "3000",
    title: "Leieinntekt",
    in: "200 000 kr.",
    change: "50 000 kr.",
    out: "150 000 kr.",
  },
  {
    name: "4000",
    title: "Varekostnad",
    in: "300 000 kr.",
    change: "20 000 kr.",
    out: "320 000 kr.",
  },
  {
    name: "5000",
    title: "Salgsinntekt",
    in: "1 500 000 kr.",
    change: "200 000 kr.",
    out: "1 700 000 kr.",
  },
  {
    name: "6000",
    title: "Markedsføringskostnad",
    in: "100 000 kr.",
    change: "10 000 kr.",
    out: "110 000 kr.",
  },
  {
    name: "7000",
    title: "Rentekostnad",
    in: "50 000 kr.",
    change: "5 000 kr.",
    out: "55 000 kr.",
  },
  {
    name: "8000",
    title: "Avskrivning",
    in: "150 000 kr.",
    change: "30 000 kr.",
    out: "180 000 kr.",
  },
  {
    name: "9000",
    title: "Annen driftskostnad",
    in: "80 000 kr.",
    change: "15 000 kr.",
    out: "95 000 kr.",
  },
  {
    name: "10000",
    title: "Skattekostnad",
    in: "200 000 kr.",
    change: "40 000 kr.",
    out: "240 000 kr.",
  },
];

export default function SaldoTable() {
  return (
    <div className="pt-16">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Saldobalanse
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            En oversikt over saldoen på alle kontoer det er oppført en saldo på.
          </p>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Konto
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Tittel
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Inngående saldo
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Endring
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Utgående saldo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.in}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.change}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.out}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
