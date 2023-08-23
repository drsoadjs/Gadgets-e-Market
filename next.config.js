/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb://localhost:27017/buynow",
    URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "nextauthbuynowdamilola20",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
