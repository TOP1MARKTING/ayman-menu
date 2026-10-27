import { ExternalLink } from "lucide-react";
import top1Mark from "@/assets/top1-mark.png";
import { LogoMark } from "./LogoMark";
import { CONTACT, DELIVERY_NOTE, FOOTER_PHRASE, telLink } from "@/data/menu";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 py-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <LogoMark size={120} />
        <p className="font-display text-3xl font-semibold text-foreground">{FOOTER_PHRASE}</p>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
          <a href={telLink(CONTACT.phone1Intl)} dir="ltr" className="phone-link text-2xl">
            {CONTACT.phone1Local}
          </a>
          <span aria-hidden className="hidden text-gold/50 sm:inline">
            |
          </span>
          <a href={telLink(CONTACT.phone2Intl)} dir="ltr" className="phone-link text-2xl">
            {CONTACT.phone2Local}
          </a>
        </div>
        <p className="text-base text-muted-foreground sm:text-lg">{DELIVERY_NOTE}</p>
        <a
          href="https://www.top1markting.com/ar"
          target="_blank"
          rel="noopener noreferrer"
          className="credit-pill"
        >
          <img src={top1Mark} alt="" width={48} height={35} className="credit-mark" />
          <span className="credit-word">تنفيذ</span>
          <span className="credit-brand" dir="ltr">
            Top<span>1</span>Markting
          </span>
          <ExternalLink aria-hidden strokeWidth={2.25} className="credit-icon" />
        </a>
      </div>
    </footer>
  );
}
