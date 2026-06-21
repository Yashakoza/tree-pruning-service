import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_TEL, WHATSAPP_LINK } from "@/lib/contact-info"

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white"
        >
          <WhatsAppIcon className="size-5" />
          וואטסאפ
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-primary-foreground"
        >
          <Phone className="size-5" />
          חיוג מהיר
        </a>
      </div>
    </div>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלחו הודעה בוואטסאפ"
      className="fixed bottom-6 left-6 z-50 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
