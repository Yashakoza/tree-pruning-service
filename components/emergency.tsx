import Image from "next/image"
import { Phone, AlertTriangle } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_TEL, WHATSAPP_LINK } from "@/lib/contact-info"

export function Emergency() {
  return (
    <section className="relative overflow-hidden bg-foreground py-16 text-background md:py-20">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/dangerous-branch.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center md:px-6">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
          <AlertTriangle className="size-7" />
        </span>
        <h2 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
          ענפים מסוכנים? עץ קרוב לחשמל או למבנה?
        </h2>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-background/80">
          במקרים של ענפים כבדים, עץ נטוי, נזקי סערה או ענפים מעל גגות, רכבים, שבילים
          או קווי חשמל — חשוב לפנות במהירות להערכה מקצועית. עץ תמיר זמין עבורכם.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={`tel:${PHONE_TEL}`}
            className="h-12 rounded-full bg-background px-7 text-base text-foreground hover:bg-background/90"
          >
            <Phone className="size-5" />
            דברו איתנו עכשיו
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
    </section>
  )
}
