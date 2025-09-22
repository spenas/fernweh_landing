import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const FernwehHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">

          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-yellow-300 transition">Inicio</a>
            <a href="#sobre-nosotros" className="hover:text-yellow-300 transition">Sobre Nosotros</a>
            <a href="#paquetes" className="hover:text-yellow-300 transition">Paquetes</a>
            <a href="#testimonios" className="hover:text-yellow-300 transition">Testimonios</a>
            <a href="#contacto" className="hover:text-yellow-300 transition">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="Fernweh Logo" className="w-40 h-40 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Viajes Personalizados a Todo Destino
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ¡Sé dueño de tu tiempo y de tu libertad! En Fernweh Tourism planeamos y armamos tu viaje a la medida, según tus posibilidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">
              Planea tu Viaje
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition">
              Ver Paquetes
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Por qué viajar con Fernweh?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">100% Personalizado</h3>
              <p className="text-gray-600">
                No encontrarás paquetes estandarizados. Armamos viajes a tu medida, según tus necesidades, tiempo y presupuesto.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sin Limitaciones</h3>
              <p className="text-gray-600">
                Diseñamos viajes a cualquier destino dentro y fuera de Colombia. Los límites los pones tú.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Acompañamiento Total</h3>
              <p className="text-gray-600">
                Te acompañamos desde la planeación hasta el viaje. Asesoría en visados, seguros y recomendaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-16 bg-gray-50" id="paquetes">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Paquetes</h2>
            <p className="text-gray-600">Servicios nacionales e internacionales para todo tipo de presupuestos</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Viajes Pre-armados</h3>
              <p className="text-gray-600 mb-6">
                Perfecto para viajes a parques temáticos, cruceros, resorts todo incluido y escapadas menores a 7 días.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>3 cotizaciones gratuitas</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Opciones de seguro médico</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Acompañamiento virtual</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Regalo personalizado</li>
              </ul>
              <a href="http://wa.me/message/57G4XU2DXK5NF1" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                  Más Información
                </button>
              </a>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Viajes Personalizados</h3>
              <p className="text-gray-600 mb-6">
                Circuitos personalizados mayores a 7 días con itinerario diseñado especialmente para ti.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>1-2 rutas posibles</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>3 opciones de alojamiento</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Todos los trayectos incluidos</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Acompañamiento completo</li>
              </ul>
              <a href="http://wa.me/message/57G4XU2DXK5NF1" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
                  Más Información
                </button>
              </a>
            </div>
          </div>
        </div>
      </section >

      {/* Stats Section */}
      < section className="py-16 bg-blue-600 text-white" >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">60+</h3>
              <p className="text-blue-100">Viajes planeados en los 5 continentes</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Clientes satisfechos</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">130+</h3>
              <p className="text-blue-100">Proveedores a nivel mundial</p>
            </div>
          </div>
        </div>
      </section >

      {/* Testimonials Preview */}
      < section className="py-16 bg-white" id="testimonios" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonios</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "La experiencia de haber confiado nuestras vacaciones en Fernweh fue la mejor..."
              </p>
              <p className="font-semibold">Cliente Satisfecho</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "Experiencia divertida con muy buen acompañamiento desde la agencia..."
              </p>
              <p className="font-semibold">Cliente Feliz</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4 italic">
                "Después de un lindo viaje y ya descansada en casa, les quiero dar las gracias..."
              </p>
              <p className="font-semibold">Viajera Contenta</p>
            </div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white" id="contacto" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¡Contáctanos!</h2>
          <p className="text-xl mb-8">¿Listo para crear el viaje de tus sueños?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>fernwehviajes.co@gmail.com</span>
            </div>
            <div className="flex space-x-4">
              <a href='https://www.instagram.com/fernwehtourism/'>
                <Instagram className="w-6 h-6 hover:text-yellow-300 cursor-pointer" />
              </a>
              <a href='https://www.facebook.com/profile.php?id=100089436862690'>
                <Facebook className="w-6 h-6 hover:text-yellow-300 cursor-pointer" />
              </a>
            </div>
          </div>
          <a href="http://wa.me/message/57G4XU2DXK5NF1" target="_blank" rel="noopener noreferrer">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">
              WhatsApp
            </button>
          </a>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-gray-800 text-white py-8" >
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Fernweh Tourism SAS. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://drive.google.com/file/d/17rh-oS8wtpdNdw03eRX7Xp-1QUzjIyFI/view" className="text-gray-400 hover:text-white transition">Términos y Condiciones</a>
            <a href="https://drive.google.com/file/d/1rje5DqR0YdO4q0EJvXKJs0u7sjkoc5e-/view" className="text-gray-400 hover:text-white transition">Política de Privacidad</a>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default FernwehHomepage;