"use client";

import type { FormEvent } from "react";
import { eventTypes } from "@/data/events";
import { waLink } from "@/data/site";

export default function BookingForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const [y, m, d] = String(f.get("fecha")).split("-");
    const text =
      `Hola, soy ${f.get("nombre")}. Quiero cotizar un evento (${f.get("tipo")}) ` +
      `para el ${d}/${m}/${y}, con aproximadamente ${f.get("invitados")} invitados. ` +
      `Me interesa: ${f.get("menu")}.`;
    window.open(waLink(text), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Tu nombre
        <input name="nombre" autoComplete="name" required />
      </label>
      <div className="row">
        <label>
          Fecha del evento
          <input type="date" name="fecha" required />
        </label>
        <label>
          Invitados
          <input type="number" name="invitados" min={10} inputMode="numeric" placeholder="50" required />
        </label>
      </div>
      <label>
        Tipo de evento
        <select name="tipo" required defaultValue="">
          <option value="" disabled>Elige uno</option>
          {eventTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label>
        ¿Qué te late?
        <select name="menu" defaultValue="Elotes y tostitos">
          <option>Elotes y tostitos</option>
          <option>Hot dogs</option>
          <option>Todo el menú</option>
        </select>
      </label>
      <button className="btn" type="submit">Cotizar por WhatsApp</button>
    </form>
  );
}
