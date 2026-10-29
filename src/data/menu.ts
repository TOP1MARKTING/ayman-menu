// Menu data — edit names, prices and images here; components stay untouched.
// Images live in src/assets/menu/ and are imported once below.

import duck from "@/assets/menu/duck.jpg";
import baniehStrips from "@/assets/menu/banieh-strips.jpg";
import thighsBone from "@/assets/menu/thighs-bone.jpg";
import chickenFeet from "@/assets/menu/chicken-feet.jpg";
import wings from "@/assets/menu/wings.jpg";
import pigeons from "@/assets/menu/pigeons.jpg";
import whiteChickens from "@/assets/menu/white-chickens.jpg";
import eggs from "@/assets/menu/eggs.jpg";
import koftaCharcoal from "@/assets/menu/kofta-charcoal.jpg";
import chickenStripsBreaded from "@/assets/menu/chicken-strips-breaded.jpg";
import grillServiceWhole from "@/assets/menu/grill-service-whole.jpg";
import grillServiceHalf from "@/assets/menu/grill-service-half.jpg";
import grillServiceQuarter from "@/assets/menu/grill-service-quarter.jpg";
import shishTawookGrill from "@/assets/menu/shish-tawook.jpg";
import grilledWholePlated from "@/assets/menu/grilled-whole-plated.jpg";
import grilledHalfPlated from "@/assets/menu/grilled-half-plated.jpg";
import grilledQuarterPlated from "@/assets/menu/grilled-quarter-plated.jpg";
import basmatiRice from "@/assets/menu/basmati-rice.jpg";
import stripsReadyFry from "@/assets/menu/strips-ready-fry.jpg";
import paneReadyFry from "@/assets/menu/pane-ready-fry.jpg";
import rawChickenKofta from "@/assets/menu/raw-chicken-kofta.jpg";
import rawBurger from "@/assets/menu/raw-burger.jpg";
import cheeseBurger from "@/assets/menu/beef-burger.jpg";
import rawShishTawook from "@/assets/menu/raw-shish-tawook.jpg";
import occasions from "@/assets/menu/occasions.jpg";
import heroGrill from "@/assets/menu/hero-grill.jpg";

export const heroImage = heroGrill;
export const occasionsImage = occasions;

export const DAILY_PRICE_LABEL = "سعر اليوم";
export const FREE_TAHINI_LABEL = "الطحينة مجانًا";

export type MenuItem = {
  name: string;
  image: string;
  /** Price as shown to the customer, e.g. "300 جنيه". Omit for daily-price items. */
  price?: string;
  /** Small note under the name, e.g. "متاح حار أو بارد". */
  note?: string;
  /** Fixed label (e.g. "سعر اليوم") instead of a price. */
  label?: string;
  /** Featured cards render larger in the grid. */
  featured?: boolean;
};

export type MenuSectionData = {
  id: string;
  title: string;
  items: MenuItem[];
  badge?: string;
  /** Clarifying note shown under the title. */
  note?: string;
};

export const menuSections: MenuSectionData[] = [
  {
    id: "fresh",
    title: "منتجاتنا الطازجة",
    items: [
      { name: "بط بلدي", image: duck, label: DAILY_PRICE_LABEL, featured: true },
      { name: "فراخ بيضاء\nتربية بيتي", image: whiteChickens, label: DAILY_PRICE_LABEL, featured: true },
      { name: "بانيه شرائح فريش", image: baniehStrips, label: DAILY_PRICE_LABEL },
      { name: "أوراك بالعظم", image: thighsBone, label: DAILY_PRICE_LABEL },
      { name: "دبابيس دجاج", image: chickenFeet, label: DAILY_PRICE_LABEL },
      { name: "أجنحة دجاج", image: wings, label: DAILY_PRICE_LABEL },
      { name: "حمام بلدي", image: pigeons, label: DAILY_PRICE_LABEL },
      { name: "بيض أبيض", image: eggs, label: DAILY_PRICE_LABEL },
    ],
  },
  {
    id: "kofta-burger",
    title: "ركن الكفتة والبرجر على الفحم",
    items: [
      { name: "كفتة على الفحم", image: koftaCharcoal, price: "350 جنيه", featured: true },
      { name: "برجر عادي", image: rawBurger, price: "300 جنيه" },
      { name: "برجر تشيز", image: cheeseBurger, price: "330 جنيه" },
      { name: "كفتة فراخ\nعلى الفحم", image: rawChickenKofta, price: "350 جنيه" },
      { name: "كيلو شيش طاووق\nعلى الفحم", image: rawShishTawook, price: "220 جنيه" },
    ],
  },
  {
    id: "grill-service",
    title: "ركن الشوي",
    badge: FREE_TAHINI_LABEL,
    // Prices are for the grilling service only, not the chicken itself.
    note: "أسعار الشوي خاصة بالخدمة فقط ولا تشمل سعر الفراخ.",
    items: [
      { name: "شوي فرخة كاملة", image: grillServiceWhole, price: "60 جنيه" },
      { name: "شوي نصف فرخة", image: grillServiceHalf, price: "30 جنيه" },
      { name: "شوي ربع فرخة", image: grillServiceQuarter, price: "15 جنيه" },
      { name: "شوي شيش طاووق", image: shishTawookGrill, price: "80 جنيه" },
    ],
  },
  {
    id: "charcoal-grills",
    title: "ركن المشويات",
    badge: FREE_TAHINI_LABEL,
    items: [
      { name: "فرخة كاملة مشوية\nعلى الفحم", image: grilledWholePlated, price: "300 جنيه", featured: true },
      { name: "نصف فرخة مشوية\nعلى الفحم", image: grilledHalfPlated, price: "150 جنيه" },
      { name: "ربع فرخة مشوية\nعلى الفحم", image: grilledQuarterPlated, price: "75 جنيه" },
      { name: "طبق أرز بسمتي\nيكفي فردًا", image: basmatiRice, price: "30 جنيه" },
    ],
  },
  {
    id: "ready-to-cook",
    title: "ركن المجزئات الجاهزة",
    items: [
      { name: "استربس دجاج، كيلو", image: chickenStripsBreaded, price: "250 جنيه" },
      { name: "استربس جاهز، كيلو\nعلى التحمير", image: stripsReadyFry, price: "250 جنيه", note: "متاح حار أو بارد" },
      { name: "بانيه جاهز، كيلو\nعلى التحمير", image: paneReadyFry, price: "250 جنيه" },
    ],
  },
];

export const CONTACT = {
  phone1Local: "01010986051",
  phone2Local: "01021785135",
  phone1Intl: "+201010986051",
  phone2Intl: "+20121785135",
};

export const DELIVERY_NOTE = "متاح توصيل لجميع الأماكن";
export const FOOTER_PHRASE = "نسعد بخدمتكم";

/** Pre-filled catering inquiry message, sent over WhatsApp with the first number. */
export const occasionsWhatsAppMessage =
  "مرحبًا، أود الاستفسار عن تجهيز وجبات للأفراح والمناسبات والعزومات، وأيضًا وجبات رمضان المتاحة للحجز.";

export function telLink(intlPhone: string): string {
  return `tel:${intlPhone.replace(/\s/g, "")}`;
}

export function waLink(intlPhone: string, message: string): string {
  return `https://wa.me/${intlPhone.replace(/^\+|\s/g, "")}?text=${encodeURIComponent(message)}`;
}
