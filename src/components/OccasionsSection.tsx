import { Reveal } from "./Reveal";
import { CONTACT, occasionsImage, occasionsWhatsAppMessage, waLink } from "@/data/menu";

export function OccasionsSection() {
  return (
    <section id="occasions" className="menu-band scroll-mt-4 py-16 sm:scroll-mt-24 sm:py-24">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <Reveal className="text-center lg:text-start">
          <div className="heading-ornament ornament-start" aria-hidden>
            <span />
            <i />
            <span />
          </div>
          <h2 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl">وجبات المناسبات والعزومات</h2>
          <div className="mt-5 space-y-2 text-lg leading-relaxed sm:text-xl">
            <p>متاح تجهيز وجبات للأفراح والمناسبات والعزومات</p>
            <p className="font-semibold text-gold">وجبات رمضان متاحة للحجز</p>
          </div>
          <a
            href={waLink(CONTACT.phone1Intl, occasionsWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 px-8 text-lg"
          >
            احجز وجبات مناسبتك
          </a>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="relative">
            <div className="hero-glow" aria-hidden />
            <img
              src={occasionsImage}
              alt="سفرة عزومات مجهزة"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="hero-photo"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
