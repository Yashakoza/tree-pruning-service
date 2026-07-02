import Image from "next/image"
import { Phone, ShieldCheck, Clock, Trash2, Building2, Award } from "lucide-react"
import { LinkButton } from "@/components/link-button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { BUSINESS_CONFIG, PHONE_TEL, WHATSAPP_LINK, SERVICE_AREA } from "@/lib/contact-info"

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "עבודה מקצועית ובטוחה" },
  { icon: Clock, label: "מענה מהיר" },
  { icon: Trash2, label: "פינוי גזם מסודר" },
  { icon: Building2, label: "לבית, לבניין ולעסק" },
  { icon: Award, label: "ניסיון בגיזום עצים" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-arborist.png"
          alt="עובד מקצועי גוזם עץ ירוק גדול בחצר מטופחת"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-sm font-semibold text-background ring-1 ring-background/25 backdrop-blur-sm">
            גיזום עצים מקצועי באזור {SERVICE_AREA}
          </span>

          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-tight text-background md:text-5xl lg:text-6xl">
            {BUSINESS_CONFIG.heroHeadline}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
            {BUSINESS_CONFIG.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href="#contact" className="h-12 rounded-full px-7 text-base">
              לקבלת הצעת מחיר
            </LinkButton>
            <LinkButton
              href={`tel:${PHONE_TEL}`}
              variant="secondary"
              className="h-12 rounded-full px-7 text-base"
            >
              <Phone className="size-5" />
              שיחה מהירה
            </LinkButton>
            <LinkButton
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 rounded-full bg-[#25D366] px-7 text-base text-white hover:bg-[#1fb855]"
            >
              <WhatsAppIcon className="size-5" />
              שלחו הודעה בוואטסאפ
            </LinkButton>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-3">
          {TRUST_BADGES.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-2 rounded-full bg-background/12 px-4 py-2 text-sm font-medium text-background ring-1 ring-background/20 backdrop-blur-sm"
            >
              <badge.icon className="size-4 shrink-0 text-accent" />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
