import { ArrowDown } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { Reveal } from "./Reveal";
import { heroImage } from "@/data/menu";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center px-4 pt-8 pb-16 sm:px-6 sm:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-4 lg:grid-cols-2 lg:gap-6">
        <Reveal className="text-center lg:text-start">
          <div className="flex justify-center lg:justify-start">
            <LogoMark size={168} />
          </div>
          <h1 className="mt-5 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">منيو المحل</h1>
          <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
            منتجات طازجة، مشويات على الفحم، وتجهيزات جاهزة تناسب كل عزومة
          </p>
          <div className="hairline mx-auto my-7 max-w-xs lg:mx-0" />
          <a href="#fresh" className="btn-gold px-8 text-lg">
            اكتشف المنيو
            <ArrowDown className="size-5" aria-hidden />
          </a>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="relative">
            <div className="hero-glow" aria-hidden />
            <img
              src={heroImage}
              alt="فرخة مشوية على الفحم"
              width={1024}
              height={1024}
              fetchPriority="high"
              className="hero-photo"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
