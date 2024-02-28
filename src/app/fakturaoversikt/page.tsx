import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { api } from "../../trpc/server";
import { Button } from "../_components/button";
import Header from "../_components/header";
import Invoices from "../_components/invoices";

export default async function Home({ searchParams: { page = "1" } }) {
  const invoices = await api.faktura.getAll.query({
    skip: (parseInt(page) - 1) * 20,
    take: 20,
  });

  return (
    <div className="h-[200vh] p-6">
      <Header
        title="Fakturaoversikt"
        breadcrumb={["Hjem", "Fakturaoversikt"]}
        primaryCta={
          <Link href="/fakturaoversikt/ny">
            <Button>
              Ny faktura <PlusIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        }
      />
      <Invoices invoices={invoices} />
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 pb-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <a
            href={
              "/fakturaoversikt?page=" +
              (page !== "1" ? (parseInt(page) - 1).toString() : "1")
            }
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Forrige
          </a>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <a
              href={"/fakturaoversikt?page=" + i}
              className={cn(
                "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
                parseInt(page) == i ? "border-indigo-500 text-indigo-600" : "",
              )}
            >
              {i}
            </a>
          ))}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <a
            href={
              "/fakturaoversikt?page=" +
              (page !== "10" ? (parseInt(page) + 1).toString() : "10")
            }
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Neste
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
