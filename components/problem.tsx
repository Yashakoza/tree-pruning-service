import { AlertTriangle, Sun, Home, Users } from "lucide-react"
import { BUSINESS_CONFIG } from "@/lib/contact-info"

const RISKS = [
  { icon: AlertTriangle, title: "סיכון בטיחותי", text: "ענפים יבשים, כבדים או נטויים עלולים ליפול ולסכן אנשים ורכוש." },
  { icon: Sun, title: "חוסם אור ונוף", text: "עץ צפוף מסתיר אור טבעי מהבית ומהגינה ומקטין את תחושת המרחב." },
  { icon: Home, title: "נזק לרכוש", text: "ענפים מעל גגות, חניות וקווי חשמל עלולים לגרום לנזק יקר." },
  { icon: Users, title: "הפרעה לשכנים", text: "עץ לא מטופל חורג לשטחים סמוכים ויוצר חיכוכים מיותרים." },
]

export function Problem() {
  return (
    <section className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            עץ שלא מטופל בזמן עלול להפוך לבעיה
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            עצים מוזנחים, יבשים או פגועי סערה הם לא רק עניין אסתטי. {BUSINESS_CONFIG.businessName} מבצע גיזום
            מבוקר ובטוח שמחזיר לחצר מראה מטופח — ומונע בעיות לפני שהן מתחילות.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RISKS.map((risk) => (
            <div
              key={risk.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <risk.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {risk.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {risk.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
