
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lostramites.com.co',
      },
      {
        protocol: 'https',
        hostname: 'https://lostramites.com.co',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    domains:["https://lostramites.com.co/","lostramites.com.co", "cloudinary.com","www.adobe.com","https://country-flags.vercel.sh","country-flags.vercel.sh","https://country-flags.vercel.sh/s/CO.svg","https://res.cloudinary.com"]
  }

}

module.exports = nextConfig

