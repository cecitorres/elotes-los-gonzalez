export const site = {
  name: "Elotes Los Gonzalez",
  tagline: "El antojo va a tu evento.",
  description:
    "Elotes, tostitos y hot dogs para tu evento en Monterrey, N.L. Cotiza por WhatsApp.",
  // TODO: cambia por tu dominio real cuando lo tengas
  url: "https://elotesgonzalez.example.com",
  whatsapp: "528180536661",
  phoneDisplay: "+52 81 8053 6661",
  city: "Monterrey, N.L., México",
  instagram: "https://www.instagram.com/elotexgonzalez",
  facebook: "https://www.facebook.com/profile.php?id=61559581241909",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const defaultMessage = "Hola, quiero cotizar un evento";
