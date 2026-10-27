import { useEffect, useState } from "react";
import { LogoMark } from "./LogoMark";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 hidden transition-colors duration-300 sm:block",
        scrolled
          ? "border-b border-gold/25 bg-[oklch(0.1_0.01_75/88%)] backdrop-blur-md"
          : "border-b border-transparent bg-[oklch(0.1_0.01_75/35%)]",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-2 sm:justify-between sm:px-6 sm:py-2.5">
        <a href="#top" aria-label="العودة إلى أعلى الصفحة" className="inline-flex">
          <span className="sm:hidden">
            <LogoMark size={78} />
          </span>
          <span className="hidden sm:inline-flex">
            <LogoMark size={62} />
          </span>
        </a>
        <nav aria-label="التنقل الرئيسي" className="site-nav hidden items-center gap-2 sm:flex">
          <a href="#fresh" className="btn-line">
            تصفح المنيو
          </a>
          <a href="#contact" className="btn-gold">
            اتصل بنا
          </a>
        </nav>
      </div>
    </header>
  );
}
