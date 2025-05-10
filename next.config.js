/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost"],
    unoptimized: true,
    // Eğer harici görsel kaynakları kullanıyorsanız, onları buraya ekleyin
    // domains: ['example.com', 'images.unsplash.com'],
  },
  // Eğer statik HTML dışa aktarımı yapacaksanız:
  // output: 'export',
}

module.exports = nextConfig
