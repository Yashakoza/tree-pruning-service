import { MapPin, Home, Building, Briefcase, Trees } from "lucide-react"
import { BUSINESS_CONFIG, SERVICE_AREA } from "@/lib/contact-info"

const PROPERTY_TYPES = [
  { icon: Home, label: "בתים פרטיים" },
  { icon: Building, label: "בנייני מגורים וועדי בתים" },
  { icon: Briefcase, label: "עסקים ומשרדים" },
  { icon: Trees, label: "גינות ושטחים פרטיים" },
]

export function ServiceArea() {
  return (
    <section className="bg-secondary/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <MapPin className="size-4" />
              אזורי שירות
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              שירותי גיזום עצים באזור {SERVICE_AREA}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {BUSINESS_CONFIG.businessName} נותן שירות לבתים פרטיים, בנייני מגורים, גינות, עסקים ושטחים
              ברחבי המרכז. לא בטוחים אם אנחנו מגיעים אליכם? פשוט שאלו אותנו.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {PROPERTY_TYPES.map((type) => (
                <li
                  key={type.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <type.icon className="size-5 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{type.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-foreground">
              ערים מרכזיות שאנחנו משרתים
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {BUSINESS_CONFIG.serviceAreaCities.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
