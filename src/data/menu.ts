export type MenuItem = { name: string; note?: string; tag?: string };
export type MenuGroup = { title: string; intro: string; items: MenuItem[] };

export const menu: MenuGroup[] = [
  {
    title: "Elotes",
    intro: "Con mayonesa, queso, chile en polvo y limón.",
    items: [
      { name: "Elote en vaso", note: "Chico (8 oz)" },
      { name: "Elote en vaso", note: "Grande (12 oz)" },
      { name: "Elote en mazorca", note: "Asado o hervido" },
      { name: "Elote con todo", note: "Queso extra y Takis o Doritos", tag: "Favorito" },
    ],
  },
  {
    title: "Tostitos",
    intro: "Picositos y aciditos, como te gustan.",
    items: [
      { name: "Tostitos preparados", note: "Pepino, jícama, cueritos, chile y limón" },
      { name: "Tostitos con elote", note: "La mezcla que no sabías que necesitabas" },
      { name: "Tostitos con queso", note: "Con nacho caliente" },
    ],
  },
  {
    title: "Hot dogs",
    intro: "Con salchicha para asar, el favorito de Monterrey.",
    items: [
      { name: "Hot dog sencillo", note: "Salchicha, tocino opcional, toppings" },
      { name: "Hot dog para asar", note: "Salchicha grande, asada al momento", tag: "Grande" },
      { name: "Hot dog para asar con tocino", note: "Envuelto en tocino y con queso" },
    ],
  },
];
