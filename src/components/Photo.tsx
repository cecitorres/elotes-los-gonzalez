import type { ReactNode } from "react";

type Props = { src?: string; alt: string; label: string; className?: string; children?: ReactNode };

// Con `src` muestra la foto; sin `src` muestra un espacio reservado.
export default function Photo({ src, alt, label, className = "", children }: Props) {
  return (
    <div className={`ph ${className}`} {...(src ? {} : { role: "img", "aria-label": alt })}>
      {children}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div>
          {label}
          <small>Reemplazar con foto real</small>
        </div>
      )}
    </div>
  );
}
