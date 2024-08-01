/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
};

// nextjs 15 doesnt cache client side routing, before we navigated and pages were stored for 30 secons causing desync.
// tutorial guy is now enabling client side routing cache manually instead of opting out
//cause is usefull for the app
export default nextConfig;
