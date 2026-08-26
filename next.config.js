/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "instagram.fktm8-1.fna.fbcdn.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res-console.cloudinary.com",
        port: "",
      },
    ],
  },
  // api: {
  //   bodyParser: false,
  // },
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = nextConfig;
