// // import { NextConfig } from 'next';
// const nextConfig = {
//     images: {
//       domains: ["cdn.sanity.io"], // Add the Sanity CDN domain
//     },
//   };
  
//   module.exports = nextConfig;
//   /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.sanity.io'], // Add the domain here
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ Allow Sanity image domain
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//         port: '',
//         pathname: '/images/hourmrx6/production/**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
