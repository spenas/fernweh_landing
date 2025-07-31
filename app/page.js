'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Aquí se integrará con el backend en el futuro
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 animate-fade-in">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-shadow-lg">
              ✈️ Fernweh Tourism
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-2">
              Tu próxima aventura comienza aquí
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          
          {/* Icono de construcción animado */}
          <div className="construction-icon text-6xl md:text-8xl mb-8">
            🏗️
          </div>

          {/* Mensaje principal */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-shadow-lg gradient-text">
              Estamos construyendo algo increíble
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow">
              Nuestra agencia de turismo está preparando experiencias únicas para convertir 
              tus sueños de viaje en realidad. Pronto estaremos listos para llevarte a 
              descubrir los destinos más extraordinarios del mundo.
            </p>
          </div>

          {/* Formulario de email */}
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-xl md:text-2xl text-white font-semibold">
              ¡Sé el primero en conocer nuestras novedades!
            </h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="email-form glass-effect rounded-lg p-6">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="tu-email@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Notifícame cuando esté listo 🚀
                  </button>
                </div>
              </form>
            ) : (
              <div className="glass-effect rounded-lg p-6 animate-pulse-slow">
                <div className="text-white text-lg">
                  ✅ ¡Gracias! Te notificaremos pronto
                </div>
              </div>
            )}
          </div>

          {/* Información de contacto */}
          <div className="glass-effect rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl text-white font-semibold mb-6">
              ¿Tienes alguna pregunta? ¡Contáctanos!
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-white/90">
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:info@fernweh-turismo.com" 
                      className="hover:text-white transition-colors"
                    >
                      info@fernwehtourism.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <a 
                      href="tel:+1234567890" 
                      className="hover:text-white transition-colors"
                    >
                      +573214148616
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="font-semibold text-center md:text-left">Síguenos en redes sociales</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="social-icon" title="Instagram">
                    📷
                  </a>
                  <a href="#" className="social-icon" title="Facebook">
                    👍
                  </a>
                  <a href="#" className="social-icon" title="WhatsApp">
                    💬
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action adicional */}
          <div className="space-y-4">
            <p className="text-white/80 text-lg">
              Mientras tanto, puedes seguirnos en redes sociales para no perderte ninguna novedad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary animate-float">
                📱 Síguenos en Instagram
              </button>
              <button className="btn-secondary animate-float" style={{animationDelay: '0.5s'}}>
                💬 Chatea con nosotros
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="glass-effect rounded-lg p-6">
            <p className="text-white/80 text-sm md:text-base">
              © 2024 Fernweh - Agencia de Turismo. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-xs md:text-sm mt-2">
              Sitio web en construcción - Próximamente disponible
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  )
}