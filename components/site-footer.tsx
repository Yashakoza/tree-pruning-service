import { TreeDeciduous, Phone, MapPin } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK, SERVICE_AREA } from "@/lib/contact-info"

const SERVICES = [
  "גיזום עצים מקצועי",
  "כריתת ענפים מסוכנים",
  "עיצוב ודילול עצים",
  "גיזום עצים בגובה",
  "פינוי גזם",
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pb-24 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <TreeDeciduous className="size-6" />
            </span>
            <span className="font-heading text-xl font-extrabold text-foreground">עץ תמיר</span>
          </div>
          <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
            שירותי גיזום עצים מקצועיים, בטוחים ונקיים לבתים פרטיים, בניינים ועסקים
            באזור {SERVICE_AREA}.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-bold text-foreground">השירותים שלנו</h3>
          <ul className="mt-4 grid gap-2 text-muted-foreground">
            {SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-foreground">צרו קשר</h3>
          <ul className="mt-4 grid gap-3">
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="size-4" />
                וואטסאפ
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" />
              {SERVICE_AREA} והסביבה
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 pt-6 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} עץ תמיר — גיזום עצים מקצועי. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
