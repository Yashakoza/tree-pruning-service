"use client"

import { useState } from "react"
import { Phone, Upload, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/link-button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_TEL, WHATSAPP_LINK } from "@/lib/contact-info"

const SERVICE_OPTIONS = [
  "גיזום עצים",
  "עיצוב ודילול עצים",
  "כריתת ענפים מסוכנים",
  "גיזום בגובה",
  "גיזום לפני חורף",
  "פינוי גזם",
  "תחזוקת עצים שוטפת",
]

const CALLBACK_TIMES = ["בבוקר", "בצהריים", "אחר הצהריים", "בערב", "בכל שעה"]

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-5">
            <div className="bg-primary p-8 text-primary-foreground md:p-10 lg:col-span-2">
              <h2 className="text-balance font-heading text-3xl font-extrabold">
                רוצים עץ בטוח, יפה ומטופח יותר?
              </h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">
                השאירו פרטים ונחזור אליכם עם הצעת מחיר ברורה. אפשר גם להתקשר או לשלוח
                תמונה של העץ בוואטסאפ — ונדע מיד איך לעזור.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <LinkButton
                  href={`tel:${PHONE_TEL}`}
                  variant="secondary"
                  className="h-12 rounded-full px-7 text-base"
                >
                  <Phone className="size-5" />
                  התקשרו עכשיו
                </LinkButton>
                <LinkButton
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 rounded-full bg-[#25D366] px-7 text-base text-white hover:bg-[#1fb855]"
                >
                  <WhatsAppIcon className="size-5" />
                  שלחו תמונה בוואטסאפ
                </LinkButton>
              </div>
            </div>

            <div className="p-8 md:p-10 lg:col-span-3">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                  <CheckCircle2 className="size-16 text-primary" />
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    תודה! קיבלנו את הבקשה
                  </h3>
                  <p className="max-w-sm leading-relaxed text-muted-foreground">
                    נחזור אליכם בהקדם עם הצעת מחיר. לפנייה דחופה ניתן להתקשר אלינו
                    ישירות.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                        שם מלא
                      </label>
                      <input id="name" name="name" required placeholder="ישראל ישראלי" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                        טלפון
                      </label>
                      <input id="phone" name="phone" type="tel" required placeholder="050-0000000" className={fieldClass} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-foreground">
                        עיר / אזור
                      </label>
                      <input id="city" name="city" placeholder="רמת גן" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                        סוג השירות המבוקש
                      </label>
                      <select id="service" name="service" className={fieldClass} defaultValue="">
                        <option value="" disabled>
                          בחרו שירות
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-foreground">
                      תיאור קצר של העבודה
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={3}
                      placeholder="לדוגמה: עץ זית גדול עם ענפים יבשים מעל החניה"
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        תמונה של העץ (לא חובה)
                      </label>
                      <label
                        htmlFor="photo"
                        className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary"
                      >
                        <Upload className="size-4 shrink-0" />
                        <span className="truncate">{fileName || "העלאת תמונה"}</span>
                        <input
                          id="photo"
                          name="photo"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                        />
                      </label>
                    </div>
                    <div>
                      <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-foreground">
                        זמן נוח לחזרה
                      </label>
                      <select id="time" name="time" className={fieldClass} defaultValue="">
                        <option value="" disabled>
                          בחרו זמן
                        </option>
                        {CALLBACK_TIMES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="mt-2 h-12 rounded-full px-7 text-base">
                    שלחו בקשה להצעת מחיר
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
