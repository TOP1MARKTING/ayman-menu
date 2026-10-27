import logo from "@/assets/logo.webp";

export function LogoMark({
  size = 56,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={logo}
      alt="أيمن للدواجن والمشويات"
      width={size}
      height={size}
      draggable={false}
      className={`inline-block shrink-0 object-contain ${className ?? ""}`}
      style={{ width: size, height: size }}
    />
  );
}
