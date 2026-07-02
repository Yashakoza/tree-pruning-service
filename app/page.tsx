import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { DemoBanner } from "@/components/demo-banner"
import { Problem } from "@/components/problem"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { BeforeAfter } from "@/components/before-after"
import { Process } from "@/components/process"
import { Emergency } from "@/components/emergency"
import { ServiceArea } from "@/components/service-area"
import { Contact } from "@/components/contact"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { StickyCta, WhatsAppFloat } from "@/components/sticky-cta"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <DemoBanner />
        <Problem />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <Process />
        <Emergency />
        <ServiceArea />
        <Contact />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCta />
      <WhatsAppFloat />
    </>
  )
}
