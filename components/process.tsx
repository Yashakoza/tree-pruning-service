import { MessageSquare, FileText, Leaf } from "lucide-react"

const STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "שולחים פרטים או מתקשרים",
    text: "ספרו לנו מה צריך — גיזום, ענפים מסוכנים, עץ גבוה או תחזוקה שוטפת.",
  },
  {
    icon: FileText,
    step: "02",
    title: "מקבלים הערכה והצעת מחיר",
    text: "נבין את מצב העץ, מיקום העבודה והיקף השירות.",
  },
  {
    icon: Leaf,
    step: "03",
    title: "מבצעים גיזום נקי ובטוח",
    text: "עבודה מקצועית, מסודרת וניקיון בסיום.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            תהליך פשוט בשלושה שלבים
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            מהפנייה הראשונה ועד חצר מטופחת — בלי כאב ראש.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <span className="absolute left-6 top-6 font-heading text-5xl font-extrabold text-primary/10">
                {step.step}
              </span>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <step.icon className="size-7" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
