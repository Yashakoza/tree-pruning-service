import { MessageSquareQuote } from "lucide-react"

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            חוות דעת של לקוחות
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            חוות דעת אמיתיות של לקוחות יתווספו כאן בהמשך.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-card p-10 text-center shadow-sm">
            <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
              <MessageSquareQuote className="size-7" />
            </span>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              מקום זה שמור לחוות דעת אמיתיות מלקוחות. לאחר סיום עבודות אפשר להוסיף
              כאן ביקורות אותנטיות, דירוגים ותמונות מהשטח.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
