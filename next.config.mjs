/** @type {import('next').NextConfig} */
import CompressionPlugin from "compression-webpack-plugin";
const nextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true, // Bu satırı ekleyin
    remotePatterns: [
      {
        protocol: "https", // Protokol
        hostname: "res.cloudinary.com", // Cloudinary alan adı
        port: "", // Port yoksa boş bırakabilirsiniz
        pathname: "/**", // Tüm yollar için geçerli
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new CompressionPlugin());
    }
    return config;
  },
};

export default nextConfig;
