"use client";

import { useState } from "react";
import { api } from "../../trpc/react";
import { actionIdToButtonText } from "../../utils";
import { Button } from "./button";

export default function MagicCard() {
  const [open, setOpen] = useState(true);
  const actions = api.ai.getInvoiceActions.useQuery();
  return (
    open && (
      <div className="group relative my-8 ">
        <div className="relative z-10 flex h-72 flex-col justify-center rounded-xl border border-neutral-200 bg-white p-4 transition-transform duration-200 ease-in-out">
          {!actions.data ? (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="container">
                <div className="slice"></div>
                <div className="slice"></div>
                <div className="slice"></div>
                <div className="slice"></div>
                <div className="slice"></div>
                <div className="slice"></div>
              </div>

              <p className="mt-2 text-sm font-medium text-neutral-500">
                Generer forslag med AI...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {JSON.parse(actions.data.actions).actions.map((action) => (
                <div className="flex cursor-pointer items-center justify-between rounded-md p-2 pr-8 hover:bg-neutral-200">
                  <div>
                    <div className="text-sm font-semibold">{action.title}</div>
                    <div className="text-xs text-neutral-400">
                      {action.description}
                    </div>
                  </div>
                  <Button>{actionIdToButtonText(action.actionId)}</Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  );
}
