import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { OccasionsSection } from "@/components/OccasionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { menuSections } from "@/data/menu";

const PAGE_TITLE = "أيمن للدواجن والمشويات — منيو المحل";
const PAGE_DESCRIPTION =
  "منيو أيمن للدواجن والمشويات: منتجات طازجة، ركن الكفتة والبرجر على الفحم، خدمة الشوي، المشويات، تجهيزات جاهزة، ووجبات للمناسبات والعزومات. للتواصل: 01010986051";

export const Route = createFileRoute("/")({
  component: RestaurantMenuPage,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: "منتجات طازجة، مشويات على الفحم، وتجهيزات جاهزة تناسب كل عزومة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function RestaurantMenuPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {menuSections.map((section, index) => (
          <MenuSection key={section.id} section={section} first={index === 0} />
        ))}
        <OccasionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
