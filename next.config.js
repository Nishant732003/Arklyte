/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY:
      "pk_test_51Mtl31SA7MEtTjaYWAAi1ZTz9R88wsSnFil9HekP47kDoN563ooQVzTZ8ZXin8GQ6UEXRCWQFpPkNHqUQ0QtG71E00wnweXdNj",
    NEXT_PUBLIC_DOMAIN: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        hostname: "imgcld.yatra.com",
      },
      {
        hostname: "content.r9cdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
