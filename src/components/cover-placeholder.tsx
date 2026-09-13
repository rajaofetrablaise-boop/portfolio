import Image from "next/image";

export function CoverPlaceholder({
  gradient,
  image,
  className = "",
}: {
  gradient: [string, string];
  image?: string;
  className?: string;
}) {
  if (image) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
    />
  );
}
