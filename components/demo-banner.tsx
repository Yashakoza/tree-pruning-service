import { Info } from "lucide-react"
import { BUSINESS_CONFIG } from "@/lib/contact-info"

export function DemoBanner() {
  if (!BUSINESS_CONFIG.isDemo) {
    return null
  }

  return (
    <div className="border-y border-border bg-secondary/60">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 px-4 py-3 md:px-6">
        <Info className="size-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-pretty text-center text-sm leading-relaxed text-muted-foreground">
          {BUSINESS_CONFIG.demoDisclaimerText}
        </p>
      </div>
    </div>
  )
}
