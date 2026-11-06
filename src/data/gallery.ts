// Pon tus fotos en /public/images y agrega "image: '/images/archivo.jpg'".
export type GalleryItem = { label: string; image?: string; alt: string };

export const hero: GalleryItem = { label: "Foto: elote preparado", alt: "Elote preparado con queso y chile" };

export const gallery: GalleryItem[] = [
  { label: "Foto: elotes", alt: "Elotes preparados" },
  { label: "Foto: tostitos", alt: "Tostitos preparados" },
  { label: "Foto: hot dogs", alt: "Hot dogs para asar" },
  { label: "Foto: montaje de evento", alt: "Nuestro montaje en un evento" },
  { label: "Foto: clientes felices", alt: "Clientes disfrutando" },
];
