import Photo from "@/components/Photo";
import Marquee from "@/components/Marquee";
import BookingForm from "@/components/BookingForm";
import SeasonToggle from "@/components/SeasonToggle";
import { site, waLink, defaultMessage } from "@/data/site";
import { menu } from "@/data/menu";
import { toppings } from "@/data/toppings";
import { eventTypes, eventFacts } from "@/data/events";
import { faq } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import { hero, gallery } from "@/data/gallery";

const nav = [
  ["#menu", "Menú"],
  ["#eventos", "Eventos"],
  ["#reservar", "Reservar"],
  ["#faq", "Preguntas"],
];
const wa = waLink(defaultMessage);

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="logo" href="#inicio">{site.name}</a>
          <ul>
            {nav.map(([href, label]) => (
              <li key={href}><a className="l" href={href}>{label}</a></li>
            ))}
          </ul>
          <a className="btn alt sm" href={wa} target="_blank" rel="noopener">Cotizar</a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="wrap grid">
            <div>
              <h1>{site.name}<span>{site.tagline}</span></h1>
              <p>Elotes bien preparados, tostitos picositos y aciditos, y hot dogs al estilo Monterrey. Calientitos y con mucho queso.</p>
              <a className="btn" href="#reservar">Aparta tu fecha</a>
            </div>
            <Photo src={hero.image} alt={hero.alt} label={hero.label}>
              <div className="sticker">¡Con mucho queso!</div>
            </Photo>
          </div>
        </section>

        <section id="menu">
          <div className="wrap">
            <h2>Menú</h2>
            <p className="lead">Preparamos todo al momento, con tus toppings favoritos.</p>
            <div className="menu">
              {menu.map((g) => (
                <article className="panel" key={g.title}>
                  <h3>{g.title}</h3>
                  <p className="sub">{g.intro}</p>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.name + it.note}>
                        <span>
                          <b>{it.name}</b>
                          <em>{it.note}{it.tag && <span className="tag">{it.tag}</span>}</em>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="note">Cada evento se cotiza según el tamaño de la fiesta y el menú. Escríbenos y te armamos una propuesta.</p>
          </div>
        </section>

        <section id="toppings" className="tops">
          <div className="wrap">
            <h2>Ponle de todo</h2>
            <p className="lead">Arma tu elote o tu hot dog como te guste, con toppings básicos y premium.</p>
            <div className="tier">
              <h3>Toppings básicos</h3>
              <Marquee items={toppings.basic} />
            </div>
            <div className="tier prem">
              <h3>Toppings premium</h3>
              <Marquee items={toppings.premium} reverse />
            </div>
            <p className="note">Ejemplo de niveles: confirma qué toppings van en cada uno y si hay costo extra.</p>
          </div>
        </section>

        <section id="eventos" className="band">
          <div className="wrap">
            <h2>Llevamos el antojo a tu evento</h2>
            <p className="lead">Servicio completo en Monterrey y área metropolitana. Nosotros llevamos todo, tú disfrutas.</p>
            <ul className="chips">
              {eventTypes.filter((t) => t !== "Otro").map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="facts">
              {eventFacts.map((f) => (
                <div key={f.title}><b>{f.title}</b>{f.text}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria">
          <div className="wrap">
            <h2>Galería</h2>
            <p className="lead">Aquí van las mejores fotos de nuestros elotes, tostitos y eventos.</p>
            <div className="gal">
              {gallery.map((g) => (
                <Photo key={g.label} src={g.image} alt={g.alt} label={g.label} />
              ))}
            </div>
          </div>
        </section>

        <section id="opiniones">
          <div className="wrap">
            <h2>Lo que dicen de nosotros</h2>
            <p className="lead">Clientes que ya tuvieron el antojo en su evento.</p>
            <div className="quotes">
              {testimonials.map((t, i) => (
                <figure className="q" key={i}>
                  <Photo src={t.image} alt={t.alt ?? `Foto de ${t.name}`} label="Foto o captura" />
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>{t.name}, {t.event}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="reservar" className="reserve">
          <div className="wrap book">
            <div>
              <h2>Aparta tu fecha</h2>
              <p className="lead">Cuéntanos de tu evento y te respondemos por WhatsApp con tu cotización.</p>
              <ol className="steps">
                <li><div><b>Llena el formulario</b><span>Fecha, tipo de evento y número de invitados.</span></div></li>
                <li><div><b>Recibe tu cotización</b><span>Te respondemos por WhatsApp con opciones y precio.</span></div></li>
                <li><div><b>Aparta con tu anticipo</b><span>Confirmamos tu fecha y listo.</span></div></li>
              </ol>
            </div>
            <BookingForm />
          </div>
        </section>

        <section id="faq">
          <div className="wrap">
            <h2>Preguntas frecuentes</h2>
            <p className="lead">Respuestas de ejemplo: ajústalas a tu servicio.</p>
            {faq.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div>
            <h2>¿Listo para el antojo?</h2>
            <p>{site.city}</p>
            <p>WhatsApp: <a href={waLink()}>{site.phoneDisplay}</a></p>
            <p>
              <a href={site.instagram} target="_blank" rel="noopener">Instagram</a> ·{" "}
              <a href={site.facebook} target="_blank" rel="noopener">Facebook</a>
            </p>
            <SeasonToggle />
          </div>
          <a className="btn alt" href={wa} target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
        </div>
        <div className="wrap"><p className="small">© 2026 {site.name}. Todos los derechos reservados.</p></div>
      </footer>

      <a className="btn fab" href={wa} target="_blank" rel="noopener" aria-label="Cotizar por WhatsApp">WhatsApp</a>
    </>
  );
}
