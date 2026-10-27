import type { MenuSectionData } from "@/data/menu";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function MenuSection({ section }: { section: MenuSectionData; first?: boolean }) {
  return (
    <section id={section.id} className="menu-band scroll-mt-4 py-12 sm:scroll-mt-24 sm:py-20">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <div className="heading-ornament" aria-hidden>
              <span />
              <i />
              <span />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-5xl">{section.title}</h2>
            {section.badge ? <p className="badge-gold mt-4">{section.badge}</p> : null}
            {section.note ? (
              <p className="mt-3 text-base leading-relaxed text-foreground/90 sm:text-lg">{section.note}</p>
            ) : null}
          </header>
        </Reveal>

        <div className="plate-menu">
          {section.items.map((item, index) => (
            <Reveal key={item.name} delayMs={(index % 2) * 60}>
              <ProductCard item={item} flip={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
