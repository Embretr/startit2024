import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Header({
  title,
  breadcrumb,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  breadcrumb: string[];
  primaryCta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            {breadcrumb.map((crumb, i) => (
              <li key={i}>
                <div className="flex items-center">
                  {i !== 0 && (
                    <ChevronRightIcon
                      className="mr-4 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {crumb}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
          {primaryCta}
          {secondaryCta}
        </div>
      </div>
    </div>
  );
}
