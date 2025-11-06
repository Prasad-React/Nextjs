const nextConfig = {
  output: 'standalone', // This is the new way to statically export
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    unoptimized: true, // disables image optimization
  },
};

export default nextConfig;
