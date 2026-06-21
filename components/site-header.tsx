"use client"

import { useState } from "react"
import { Phone, TreeDeciduous, Menu, X } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact-info"

const NAV_LINKS = [
  { label: "שירותים", href: "#services" },
  { label: "למה אנחנו", href: "#why" },
  { label: "תהליך", href: "#process" },
  { label: "המלצות", href: "#reviews" },
  { label: "צרו קשר", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <TreeDeciduous className="size-6" />
          </span>
          <span className="font-heading text-xl font-extrabold text-foreground">עץ תמיר</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href={`tel:${PHONE_TEL}`}>
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
            aria-label="תפריט"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
