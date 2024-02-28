"use client";

import { useState } from "react";

export default function MagicCard() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  return (
    open && (
      <div className="group relative my-16 ">
        <div className="absolute z-0 h-full w-full rounded-xl bg-neutral-100"></div>
        <div className="relative z-10 flex h-44 flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white transition-transform duration-200 ease-in-out hover:-translate-y-4">
          {loading?(
            <>
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
            </>
          ):(
            
          )}
        </div>
      </div>
    )
  );
}
