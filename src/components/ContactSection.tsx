import { Truck } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, DELIVERY_NOTE, telLink, waLink } from "@/data/menu";

const WHATSAPP_QUESTION = "مرحبًا، أود الاستفسار عن المنيو والحجز.";

function PhoneBlock({
  localNumber,
  intlNumber,
  callLabel,
  whatsappLabel,
}: {
  localNumber: string;
  intlNumber: string;
  callLabel: string;
  whatsappLabel: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <a href={telLink(intlNumber)} dir="ltr" className="phone-link">
        {localNumber}
      </a>
      <div className="flex w-full max-w-sm flex-col gap-3">
        <a href={telLink(intlNumber)} className="btn-gold w-full">
          {callLabel}
        </a>
        <a
          href={waLink(intlNumber, WHATSAPP_QUESTION)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line w-full"
        >
          {whatsappLabel}
        </a>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-4 py-16 sm:scroll-mt-24 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <header className="mb-12 text-center">
            <div className="heading-ornament" aria-hidden>
              <span />
              <i />
              <span />
            </div>
            <h2 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl">للحجز والاستفسار</h2>
            <p className="mt-4 inline-flex items-center gap-2 text-lg text-muted-foreground">
              <Truck className="size-5 text-gold" aria-hidden />
              {DELIVERY_NOTE}
            </p>
          </header>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          <Reveal>
            <PhoneBlock
              localNumber={CONTACT.phone1Local}
              intlNumber={CONTACT.phone1Intl}
              callLabel="اتصال بالرقم الأول"
              whatsappLabel="تواصل عبر واتساب على الرقم الأول"
            />
          </Reveal>
          <Reveal delayMs={90}>
            <PhoneBlock
              localNumber={CONTACT.phone2Local}
              intlNumber={CONTACT.phone2Intl}
              callLabel="اتصال بالرقم الثاني"
              whatsappLabel="تواصل عبر واتساب على الرقم الثاني"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
