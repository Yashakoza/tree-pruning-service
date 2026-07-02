import Image from "next/image"
import { Check } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { BUSINESS_CONFIG } from "@/lib/contact-info"

const REASONS = [
  "עבודה בטוחה ומדויקת",
  "יחס אישי ואמין",
  "שמירה על ניקיון בסיום העבודה",
  "התאמה לכל סוג עץ וסביבה",
  "שירות מהיר ונוח",
  "הצעת מחיר ברורה",
  "פתרונות לבתים פרטיים, ועדי בתים ועסקים",
  "זמינות בטלפון ובוואטסאפ",
]

export function WhyUs() {
  return (
    <section id="why" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
            למה לבחור ב{BUSINESS_CONFIG.businessName}?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
            כי גיזום עצים זה לא רק להוריד ענפים — אלא לדעת בדיוק מה, איך ומתי. אצלנו
            מקבלים עבודה מקצועית, יחס אישי וחצר נקייה בסיום.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-4" />
                </span>
                <span className="leading-relaxed text-primary-foreground/90">{reason}</span>
              </li>
            ))}
          </ul>

          <LinkButton
            href="#contact"
            variant="secondary"
            className="mt-8 h-12 rounded-full px-7 text-base"
          >
            דברו איתנו עכשיו
          </LinkButton>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-background/15 lg:aspect-[4/4.5]">
          <Image
            src="/images/hero-arborist.png"
            alt={`עובד מקצועי של ${BUSINESS_CONFIG.businessName} בעבודת גיזום`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
