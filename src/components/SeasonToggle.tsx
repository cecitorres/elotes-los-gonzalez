"use client";

import { useState } from "react";

// Cambia el acento de color de temporada. Para otra temporada, agrega
// un bloque :root[data-season="..."] en globals.css.
export default function SeasonToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      className="season"
      type="button"
      aria-pressed={on}
      onClick={() => {
        const next = !on;
        setOn(next);
        const root = document.documentElement;
        if (next) root.setAttribute("data-season", "halloween");
        else root.removeAttribute("data-season");
      }}
    >
      Probar tema Halloween
    </button>
  );
}
