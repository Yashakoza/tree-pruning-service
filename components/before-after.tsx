"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

const BENEFITS = [
  "חצר מסודרת יותר",
  "יותר אור ונוף",
  "פחות ענפים מסוכנים",
  "עץ בריא ומאוזן יותר",
  "סביבת מגורים בטוחה ונקייה יותר",
]

export function BeforeAfter() {
  const [view, setView] = useState<"before" | "after">("after")

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            ההבדל שרואים מיד בחצר
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            גיזום מקצועי משנה את כל התמונה — יותר אור, פחות סיכונים ועץ שנראה הרבה
            יותר טוב.
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full bg-secondary p-1">
              <button
                type="button"
                onClick={() => setView("before")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
                  view === "before"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                לפני
              </button>
              <button
                type="button"
                onClick={() => setView("after")}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
                  view === "after"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                אחרי
              </button>
            </div>

            <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-border">
              <Image
                src={view === "before" ? "/images/before-tree.png" : "/images/after-tree.png"}
                alt={view === "before" ? "עץ מוזנח לפני גיזום" : "עץ מטופח אחרי גיזום מקצועי"}
                fill
                className="object-cover transition-opacity duration-300"
              />
              <span className="absolute right-4 top-4 rounded-full bg-foreground/80 px-4 py-1.5 text-sm font-bold text-background">
                {view === "before" ? "לפני הטיפול" : "אחרי הטיפול"}
              </span>
            </div>
          </div>

          <ul className="grid gap-4">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Check className="size-5" />
                </span>
                <span className="font-heading text-lg font-semibold text-foreground">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
