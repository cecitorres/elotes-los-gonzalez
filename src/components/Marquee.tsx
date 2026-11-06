type Props = { items: string[]; reverse?: boolean };

// Marquee solo con CSS. Repite los items para llenar pantallas anchas;
// con "reducir movimiento" se muestra una lista estática (ver globals.css).
export default function Marquee({ items, reverse = false }: Props) {
  const repeats = Math.max(1, Math.ceil(20 / items.length));
  const list = Array.from({ length: repeats }, (_, r) =>
    items.map((t) => ({ t, rep: r > 0 })),
  ).flat();

  const renderList = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className={hidden ? "dup" : undefined}>
      {list.map((x, i) => (
        <li key={i} className={x.rep ? "rep" : undefined} aria-hidden={x.rep || undefined}>
          {x.t}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marq${reverse ? " rev" : ""}`}>
      <div className="track">
        {renderList(false)}
        {renderList(true)}
      </div>
    </div>
  );
}
