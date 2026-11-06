/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // genera sitio estático en /out
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
