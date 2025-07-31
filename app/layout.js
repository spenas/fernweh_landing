import './globals.css'

export const metadata = {
  title: 'Fernweh Tourism - Worldwide travel planners | En Construcción',
  description: 'Estamos construyendo algo increíble para tus próximas aventuras. Pronto estaremos listos para ayudarte a descubrir el mundo.',
  keywords: 'turismo, viajes, agencia de viajes, aventuras, vacaciones, construcción',
  authors: [{ name: 'Fernweh Turismo' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Fernweh - Agencia de Turismo | En Construcción',
    description: 'Estamos construyendo algo increíble para tus próximas aventuras.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernweh - Agencia de Turismo | En Construcción',
    description: 'Estamos construyendo algo increíble para tus próximas aventuras.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="antialiased bg-gradient-to-br from-ocean-blue via-deep-blue to-nature-green min-h-screen">
        {children}
      </body>
    </html>
  )
}