import type { MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

export function ProductCard({ item, flip = false }: { item: MenuItem; flip?: boolean }) {
  return (
    <figure className={cn("plate-row", flip && "is-flip")}>
      <div className="plate-disc">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          width={640}
          height={640}
          className="plate-img"
        />
      </div>
      <figcaption className="plate-caption">
        <h3>{item.name}</h3>
        {item.note ? <p className="plate-note">{item.note}</p> : null}
        {item.price ? <p className="plate-price">{item.price}</p> : null}
        {!item.price && item.label ? <p className="plate-price">{item.label}</p> : null}
      </figcaption>
    </figure>
  );
}
