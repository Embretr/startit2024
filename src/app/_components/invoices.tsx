"use client";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Invoice as Inv } from "../../server/api/routers/faktura";

const statuses = {
  Betalt: "text-green-700 bg-green-50 ring-green-600/20",
  "Ikke betalt": "text-red-600 bg-red-50 ring-red-500/10",
  Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Invoices({ invoices }: { invoices: Inv[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {invoices.map((invoice, key: number) => (
        <Invoice key={key} invoice={invoice} />
      ))}
    </ul>
  );
}

export function Invoice({ invoice }: { invoice: Inv }) {
  return (
    <li
      key={invoice.id}
      className="flex items-center justify-between gap-x-6 py-5"
    >
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {invoice.kundenummer} - {invoice.selskap}
          </p>
          <p
            className={classNames(
              statuses[invoice.utestaende === 0 ? "Betalt" : "Ikke betalt"],
              "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
            )}
          >
            {invoice.utestaende === 0 ? "Betalt" : "Ikke betalt"}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">
            Forfaller <time>{invoice.forfallsdato}</time>
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <p className="truncate">
            Avsender: {invoice.selskap + " - " + invoice.id}
          </p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <Menu as="div" className="relative flex-none">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          ></Transition>
        </Menu>
      </div>
    </li>
  );
}
