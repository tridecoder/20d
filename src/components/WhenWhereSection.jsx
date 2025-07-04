import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Heart,
  Utensils,
  Music,
  HelpCircle,
} from "lucide-react";

export default function WhenWhereSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ¿Cuándo y dónde?
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-300 hidden md:block"></div>

          {/* Ceremonia */}
          <div className="relative mb-12 md:mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-white rounded-xl shadow-lg p-6 md:ml-auto md:max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Ceremonia
                    </h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-rose-500" />
                      <span className="text-lg font-medium">
                        20 de diciembre de 2025
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-rose-500" />
                      <span className="text-lg font-medium">12:45h</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                      <div>
                        <p className="font-medium">Casa del Reloj</p>
                        <p className="text-gray-600">Paseo de la Chopera, 6</p>
                        <p className="text-gray-600">
                          28045 Madrid (Arganzuela)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-rose-50 rounded-lg p-4 mb-4 space-y-2">
                    <p className="text-sm text-rose-800 font-medium">
                      ⏰ <strong>¡Importante!</strong> Llega antes de las
                      12:30h. La ceremonia dura solo 15 minutos.
                    </p>
                    <p className="text-sm text-rose-800 font-medium">
                      🚫 <strong>Recinto municipal:</strong> Prohibido lanzar
                      arroz, confeti, petardos, cigarros, gatos o cualquier tipo
                      de elemento.
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>🚇 Metro:</strong> Legazpi (L3, L6) - 5 min
                      andando
                    </p>
                    <p>
                      <strong>🚌 Autobús:</strong> 6, 18, 19, 22, 45, 47, 59,
                      62, 76, 78
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Mapa Casa del Reloj */}
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.6674827094595!2d-3.7010746!3d40.3930729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227e1f5b7c7cb%3A0x7b8c9f4e5d2a3b6c!2sCasa%20del%20Reloj!5e0!3m2!1ses!2ses!4v1625678901234!5m2!1ses!2ses"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Casa del Reloj"
                  ></iframe>
                  <div className="p-4">
                    <a
                      href="https://maps.google.com/?q=Casa+del+Reloj+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
                    >
                      <Navigation className="w-4 h-4" />
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Celebración */}
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                <div className="bg-white rounded-xl shadow-lg p-6 md:mr-auto md:max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Celebración
                    </h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-500" />
                      <span className="text-lg font-medium">
                        Después de la ceremonia
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-500 mt-1" />
                      <div>
                        <p className="font-medium text-amber-700">
                          Ubicación por confirmar
                        </p>
                        <p className="text-gray-600">
                          Os informaremos próximamente del lugar exacto
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-800">
                          Cocktail y aperitivos
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-800">
                          Música y baile
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      📍 <strong>¡Tranquilos!</strong> Será en el centro de
                      Madrid y os daremos todos los detalles con tiempo
                      suficiente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Mapa Hotel Urban */}
            </div>
          </div>
        </div>

        {/* Info adicional */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Información adicional
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-700">
                🎯 Alternativa ceremonia
              </h4>
              <p className="text-gray-600">
                Si la Casa del Reloj no está disponible, suelen poner un belén
                que ocupa el sitio donde se celebran las bodas, lo más probable
                es que la ceremonia sea en el Invernadero (mismo complejo).
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-700">🚗 Parking</h4>
              <p className="text-gray-600">
                Ambas ubicaciones cuentan con opciones de aparcamiento público
                cercano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
