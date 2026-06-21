import { Phone } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_TEL, WHATSAPP_LINK } from "@/lib/contact-info"

export function FinalCta() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center md:px-6">
        <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight md:text-4xl">
          עץ תמיר — גיזום עצים מקצועי שמשאיר את החצר בטוחה, נקייה ויפה
        </h2>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          צריכים לגזום עץ, להסיר ענפים מסוכנים או לסדר את החצר? השאירו פרטים ונחזור
          אליכם בהקדם.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <LinkButton
            href="#contact"
            variant="secondary"
            className="h-12 rounded-full px-7 text-base"
          >
            לקבלת הצעת מחיר
          </LinkButton>
          <LinkButton
            href={`tel:${PHONE_TEL}`}
            className="h-12 rounded-full bg-background px-7 text-base text-foreground hover:bg-background/90"
          >
            <Phone className="size-5" />
            שיחה עכשיו
          </LinkButton>
          <LinkButton
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 rounded-full bg-[#25D366] px-7 text-base text-white hover:bg-[#1fb855]"
          >
            <WhatsAppIcon className="size-5" />
            וואטסאפ
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
