"use client";

import { useState } from "react";
import { api } from "../../trpc/react";
import { actionIdToButtonText } from "../../utils";
import { Button } from "./button";
import CreateEmailDialog from "./create-email-dialog";
import CreateInvoiceDialog from "./create-invoice-dialog";

export default function MagicCard() {
  const [open, setOpen] = useState(true);
  const [selectedAction, setselectedAction] = useState("");

  const actions = api.ai.getInvoiceActions.useQuery();
  return (
    open && (
      <div className="group relative my-8 ">
        <div className="relative z-10 flex h-72 flex-col justify-center rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-green-100 p-4 shadow-sm transition-transform duration-200 ease-in-out">
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
                Genererer forslag ved bruk av AI...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {[
                ...JSON.parse(actions.data).actions,
                {
                  actionId: 1004,
                  title:
                    "Kunde med kundenummer 10384 har mange utestående fakturaer.",
                  description:
                    "Send en faktura til kunden med forfallsdato 0006-10-22.",
                },
              ]
                .slice(1)
                .map((action) => {
                  return (
                    <div className="flex items-center justify-between rounded-md p-2 pr-8 ">
                      {action.actionId < 1004 && (
                        <CreateEmailDialog
                          action={action}
                          isOpen={selectedAction === action.title}
                          onOpenChange={() => setselectedAction("")}
                        />
                      )}
                      {action.actionId === 1004 && (
                        <CreateInvoiceDialog
                          action={action}
                          isOpen={selectedAction === action.title}
                          onOpenChange={() => setselectedAction("")}
                        />
                      )}
                      <div>
                        <div className="text-sm font-semibold">
                          {action.title}
                        </div>
                        <div className="text-xs text-neutral-600">
                          {action.description}
                        </div>
                      </div>
                      <Button
                        variant="secondary"
                        onClick={() => setselectedAction(action.title)}
                        className="w-64 bg-white text-neutral-900 hover:bg-neutral-200"
                      >
                        {actionIdToButtonText(action.actionId)}
                      </Button>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    )
  );
}
