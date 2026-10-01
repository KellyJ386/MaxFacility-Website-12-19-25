"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { modules } from "@/lib/modules";

/** Pill tab switcher: pick a module, see its detail card. */
export default function ModuleTabs() {
  const [active, setActive] = useState(0);
  const m = modules[active];

  return (
    <div>
      <div
        role="tablist"
        className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-2 rounded-[2rem] bg-white p-2 shadow-soft"
      >
        {modules.map((mod, i) => (
          <button
            key={mod.title}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full px-5 py-3 font-display text-sm font-semibold transition-all",
              i === active
                ? "bg-gradient-to-r from-navy to-navy-500 text-white shadow-md"
                : "text-navy hover:bg-navy-50"
            )}
          >
            {mod.title}
          </button>
        ))}
      </div>

      <div
        key={m.title}
        role="tabpanel"
        className="card-soft mx-auto grid max-w-5xl gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:p-12"
      >
        <div>
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy">
            <m.icon className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="mb-3 text-3xl font-bold text-navy">{m.title}</h3>
          <p className="text-grey-600">{m.description}</p>
        </div>
        <ul className="space-y-3">
          {m.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 rounded-2xl bg-navy-50/60 px-4 py-3 text-sm text-grey-800"
            >
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
