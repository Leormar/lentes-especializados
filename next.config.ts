import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Fotos de perfil de quienes dejan reseña en Google.
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      // Portadas de las entradas de A la Medida, servidas por Substack.
      {
        protocol: "https",
        hostname: "substackcdn.com",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
