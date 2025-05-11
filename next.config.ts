/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me", "picsum.photos"], // Vercel exige essa lista
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
