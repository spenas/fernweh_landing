/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones para producción
  poweredByHeader: false,
  
  // Configuración para Vercel
  output: 'standalone',
  
  // Optimizaciones de imagen (Next.js tiene optimización automática)
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 horas
  },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Configuración experimental para mejor rendimiento
  experimental: {
    scrollRestoration: true,
  },

  // Compresión
  compress: true,

  // Configuración para trailing slash (importante para algunos hostings)
  trailingSlash: false,

  // Configuración para PWA (opcional para el futuro)
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },
}

module.exports = nextConfig