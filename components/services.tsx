import { Scissors, Sparkles, Axe, MoveUp, Snowflake, Trash2, CalendarCheck } from "lucide-react"

const SERVICES = [
  {
    icon: Scissors,
    title: "גיזום עצים מקצועי",
    text: "גיזום מדויק לשמירה על בריאות העץ, מראה נקי ובטיחות הסביבה.",
  },
  {
    icon: Sparkles,
    title: "עיצוב ודילול עצים",
    text: "פתיחת נוף העץ, הכנסת אור לגינה ושמירה על צורה טבעית ויפה.",
  },
  {
    icon: Axe,
    title: "כריתת ענפים מסוכנים",
    text: "הסרת ענפים יבשים, כבדים או מסוכנים לפני שהם גורמים לנזק.",
  },
  {
    icon: MoveUp,
    title: "גיזום בגובה",
    text: "עבודה מקצועית גם בעצים גבוהים ובמקומות מורכבים.",
  },
  {
    icon: Snowflake,
    title: "גיזום לפני חורף",
    text: "הכנה לעונת רוחות וגשמים כדי להפחית סיכונים ולשמור על הסביבה.",
  },
  {
    icon: Trash2,
    title: "פינוי גזם",
    text: "השארת שטח נקי ומסודר בסיום העבודה.",
  },
  {
    icon: CalendarCheck,
    title: "תחזוקת עצים שוטפת",
    text: "שירות קבוע לבתים פרטיים, בנייני מגורים, עסקים ושטחים ציבוריים.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
            השירותים שלנו
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            כל שירותי גיזום העצים תחת קורת גג אחת
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            מגיזום שוטף ועיצוב נוף ועד הסרת ענפים מסוכנים ועבודה בגובה — בצורה
            מקצועית, בטוחה ונקייה.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-7" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
