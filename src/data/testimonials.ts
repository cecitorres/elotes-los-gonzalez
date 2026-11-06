export type Testimonial = {
  quote: string;
  name: string;
  event: string;
  image?: string; // ej. "/images/testimonio-1.jpg" (foto o captura de WhatsApp)
  alt?: string;
};

export const testimonials: Testimonial[] = [
  { quote: "Aquí va el comentario de un cliente.", name: "Nombre", event: "Tipo de evento" },
  { quote: "Aquí va el comentario de un cliente.", name: "Nombre", event: "Tipo de evento" },
  { quote: "Aquí va el comentario de un cliente.", name: "Nombre", event: "Tipo de evento" },
];
