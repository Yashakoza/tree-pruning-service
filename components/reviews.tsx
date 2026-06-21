import { Star } from "lucide-react"

const REVIEWS = [
  {
    text: "תמיר הגיע בזמן, הסביר בדיוק מה צריך לעשות, גזם את העץ בצורה מקצועית והשאיר את החצר נקייה לגמרי. שירות מצוין.",
    name: "דניאל",
    city: "רמת גן",
  },
  {
    text: "היה לנו עץ גדול עם ענפים מעל החניה. העבודה בוצעה בזהירות ובמקצועיות, והמחיר היה הוגן.",
    name: "מיכל",
    city: "הוד השרון",
  },
  {
    text: "שירות מהיר, אדיב ומסודר. סוף סוף נכנס אור לגינה והעץ נראה הרבה יותר טוב.",
    name: "אבי",
    city: "ראשון לציון",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            לקוחות מספרים על עץ תמיר
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            אמינות, מקצועיות וניקיון — זה מה שלקוחותינו הכי אוהבים אצלנו.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {review.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-heading font-bold text-foreground">
                    {review.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">{review.city}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
