import { describe, expect, it } from "vitest";
import {
  CONTACT,
  DAILY_PRICE_LABEL,
  DELIVERY_NOTE,
  FOOTER_PHRASE,
  FREE_TAHINI_LABEL,
  menuSections,
  occasionsWhatsAppMessage,
  telLink,
  waLink,
} from "../data/menu";

const allItems = menuSections.flatMap((section) => section.items);
const priceOf = (namePrefix: string) =>
  allItems.find((item) => item.name.startsWith(namePrefix))?.price;
const nameOf = (namePrefix: string) =>
  allItems.find((item) => item.name.startsWith(namePrefix))?.name;

describe("menu data rules", () => {
  it("shows daily-price labels without numeric prices for fresh products", () => {
    const fresh = menuSections.find((s) => s.id === "fresh");
    expect(fresh).toBeDefined();
    expect(fresh!.items).toHaveLength(8);
    for (const item of fresh!.items) {
      expect(item.price).toBeUndefined();
      expect(item.label).toBe(DAILY_PRICE_LABEL);
    }
  });

  it("keeps the exact prices provided by the restaurant", () => {
    expect(priceOf("كفتة على الفحم")).toBe("300 جنيه");
    expect(priceOf("استربس دجاج")).toBe("250 جنيه");
    expect(priceOf("شوي فرخة كاملة")).toBe("60 جنيه");
    expect(priceOf("شوي نصف فرخة")).toBe("30 جنيه");
    expect(priceOf("شوي ربع فرخة")).toBe("15 جنيه");
    expect(priceOf("شوي شيش طاووق")).toBe("80 جنيه");
    expect(priceOf("فرخة كاملة مشوية")).toBe("300 جنيه");
    expect(priceOf("نصف فرخة مشوية")).toBe("150 جنيه");
    expect(priceOf("ربع فرخة مشوية")).toBe("75 جنيه");
    expect(priceOf("طبق أرز بسمتي")).toBe("30 جنيه");
    expect(priceOf("استربس جاهز")).toBe("250 جنيه");
    expect(priceOf("بانيه جاهز")).toBe("250 جنيه");
    expect(priceOf("كفتة لحمة")).toBe("300 جنيه");
    expect(priceOf("كفتة فراخ")).toBe("350 جنيه");
    expect(priceOf("برجر لحمة")).toBe("300 جنيه");
    expect(priceOf("شيش طاووق")).toBe("240 جنيه");
  });

  it("assigns no weight where none was specified", () => {
    expect(nameOf("كفتة لحمة")).toBe("كفتة لحمة\nعلى الفحم");
    expect(nameOf("كفتة فراخ")).toBe("كفتة فراخ\nعلى الفحم");
    expect(nameOf("برجر لحمة")).toBe("برجر لحمة\nعلى الفحم");
    expect(nameOf("شيش طاووق")).toBe("شيش طاووق فراخ\nعلى الفحم");
  });

  it("marks grilling-service prices as service-only and offers free tahini", () => {
    const service = menuSections.find((s) => s.id === "grill-service");
    expect(service!.badge).toBe(FREE_TAHINI_LABEL);
    expect(service!.note).toContain("لا تشمل سعر الفراخ");
    const grills = menuSections.find((s) => s.id === "charcoal-grills");
    expect(grills!.badge).toBe(FREE_TAHINI_LABEL);
  });

  it("notes hot/cold option on the ready-to-fry strips", () => {
    const item = allItems.find((i) => i.name.startsWith("استربس جاهز"))!;
    expect(item.note).toBe("متاح حار أو بارد");
  });

  it("uses the exact contact numbers", () => {
    expect(CONTACT.phone1Local).toBe("01010986051");
    expect(CONTACT.phone2Local).toBe("01021785135");
    expect(telLink(CONTACT.phone1Intl)).toBe("tel:+201010986051");
    expect(telLink(CONTACT.phone2Intl)).toBe("tel:+20121785135");
    expect(DELIVERY_NOTE).toBe("متاح توصيل لجميع الأماكن");
    expect(FOOTER_PHRASE).toBe("نسعد بخدمتكم");
  });

  it("sends occasions WhatsApp bookings over the first number", () => {
    const link = waLink(CONTACT.phone1Intl, occasionsWhatsAppMessage);
    expect(link).toMatch(/^https:\/\/wa\.me\/201010986051\?text=/);
    expect(decodeURIComponent(link.split("text=")[1]!)).toContain("وجبات رمضان");
  });
});
