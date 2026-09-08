/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com, res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
