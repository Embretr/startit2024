"use client";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const statuses = {
  Betalt: "text-green-700 bg-green-50 ring-green-600/20",
  "Ikke betalt": "text-red-600 bg-red-50 ring-red-500/10",
  Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};
const invoices = [
  {
    id: 1,
    name: "Company A #001",
    href: "#",
    status: "Betalt",
    createdBy: "Company A",
    dueDate: "March 1, 2024",
    dueDateTime: "2024-03-01T00:00Z",
  },
  {
    id: 2,
    name: "Company B #002",
    href: "#",
    status: "Ikke betalt",
    createdBy: "Company B",
    dueDate: "March 15, 2024",
    dueDateTime: "2024-03-15T00:00Z",
  },
  {
    id: 3,
    name: "Company C #003",
    href: "#",
    status: "Ikke betalt",
    createdBy: "Company C",
    dueDate: "March 20, 2024",
    dueDateTime: "2024-03-20T00:00Z",
  },
  {
    id: 4,
    name: "Company D #004",
    href: "#",
    status: "Ikke betalt",
    createdBy: "Company D",
    dueDate: "March 25, 2024",
    dueDateTime: "2024-03-25T00:00Z",
  },
  {
    id: 5,
    name: "Company E #005",
    href: "#",
    status: "Betalt",
    createdBy: "Company E",
    dueDate: "March 31, 2024",
    dueDateTime: "2024-03-31T00:00Z",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Invoices() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {invoices.map((project, key) => (
        <Invoice {...project} key={key} />
      ))}
    </ul>
  );
}

interface project {
  id: number;
  name: string;
  href: string;
  status: string;
  createdBy: string;
  dueDate: string;
  dueDateTime: string;
}

export function Invoice(project: project) {
  return (
    <li
      key={project.id}
      className="flex items-center justify-between gap-x-6 py-5"
    >
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {project.name}
          </p>
          <p
            className={classNames(
              statuses[project.status as keyof typeof statuses],
              "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
            )}
          >
            {project.status}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">
            Forfaller{" "}
            <time dateTime={project.dueDateTime}>{project.dueDate}</time>
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <p className="truncate">Avsender: {project.createdBy}</p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <a
          href={project.href}
          className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
        >
          Se faktura<span className="sr-only">, {project.name}</span>
        </a>
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
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900",
                    )}
                  >
                    Edit<span className="sr-only">, {project.name}</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900",
                    )}
                  >
                    Move<span className="sr-only">, {project.name}</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900",
                    )}
                  >
                    Delete<span className="sr-only">, {project.name}</span>
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </li>
  );
}
