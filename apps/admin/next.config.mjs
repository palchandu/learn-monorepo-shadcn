/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://fakestoreapi.com/:path*",
      },
    ];
  }
}

export default nextConfig
