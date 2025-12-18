import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Heart,
  Utensils,
  Music,
  Car,
  Train,
  Wifi,
  Phone,
  Star,
  ArrowRight,
} from "lucide-react";
import WeatherWidget from "./WeatherWidget.jsx";

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
                      <span className="text-lg font-medium">12:15h</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                      <div>
                        <p className="font-medium">
                          Auditorio de Nuevas Dependencias
                        </p>
                        <p className="text-gray-600">Paseo de la Chopera, 6</p>
                        <p className="text-gray-600">
                          28045 Madrid (Arganzuela)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-rose-50 rounded-lg p-4 mb-4 space-y-2">
                    <p className="text-sm text-rose-800 font-medium">
                      🚫 <strong>Recinto municipal:</strong> Prohibido lanzar
                      arroz, confeti, petardos, cigarros, gatos o cualquier tipo
                      de elemento. CUMPLID ESTO ESTRICTAMENTE, QUE YA NOS
                      CONOCEMOS TODAS.
                    </p>
                    <p className="text-sm text-rose-800 font-medium">
                      ⏰ <strong>¡Importante!</strong> El espacio de la
                      ceremonia es reducido, pero cabemos todos. Quien quiera
                      acercarse, es bienvenido. Y los que lo prefieran, pueden
                      ir directamente al lugar de celebración.
                    </p>
                    <p className="text-sm text-rose-800 font-medium">
                      🚫{" "}
                      <strong>
                        Repetimos. ¡NO TIRÉIS NADA QUE HAY MULTA GORDA!
                      </strong>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.90067929300017!2d-3.700447999999989!3d40.39443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42279f53409521%3A0xcd405399fae21d93!2sAuditorio%20Nuevas%20Dependencias%20Casa%20del%20Reloj!5e0!3m2!1ses!2ses!4v1764767551465!5m2!1ses!2ses"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Auditorio Nuevas Dependencias - Casa del Reloj"
                  ></iframe>
                  <div className="p-4">
                    <a
                      href="https://maps.google.com/?q=Auditorio+Nuevas+Dependencias+Paseo+de+la+Chopera+6+Madrid"
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

          {/* Traslado */}
          <div className="relative mb-12 md:mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
                <div className="bg-white rounded-xl shadow-lg p-6 md:ml-auto md:max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Traslado
                    </h3>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-lg font-medium">
                        Después de la ceremonia (~13:00h)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Navigation className="w-5 h-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium">
                          Auditorio Nuevas Dependencias → Callao
                        </p>
                        <p className="text-gray-600">
                          15-20 minutos en transporte público
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Train className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">
                          <strong>Metro:</strong> Legazpi → Callao (L3 directa,
                          6 paradas)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">
                          <strong>Taxi/Uber:</strong> 10-15 min (según tráfico)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Ruta visual */}
              <div className="md:w-1/2 md:pl-8 order-1 md:order-2">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                      <p className="text-sm font-medium">
                        Auditorio de Nuevas Dependencias
                      </p>
                      <p className="text-xs text-gray-500">Arganzuela</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                    <div className="text-center">
                      <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <p className="text-sm font-medium">Hyatt Centric</p>
                      <p className="text-xs text-gray-500">Gran Vía</p>
                    </div>
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
                        13:30h - 20:00h (aprox.)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                      <div>
                        <p className="font-medium">
                          Hyatt Centric Gran Vía Madrid
                        </p>
                        <p className="text-gray-600">
                          Espacio "Hielo y Carbón"
                        </p>
                        <p className="text-gray-600">Gran Vía, 31</p>
                        <p className="text-gray-600">28013 Madrid (Centro)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-800">
                          Cocktail
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-800">
                          Música y barra libre
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-800">
                          Decoración navideña por la Gran Vía
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>🚇 Metro:</strong> Gran Vía (L1, L5) - 1 min
                      andando
                    </p>
                    <p>
                      <strong>🚇 También:</strong> Callao (L3, L5) - 3 min
                      andando
                    </p>
                    <p>
                      <strong>📞 Hotel:</strong> +34 91 418 88 88
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Mapa Hyatt Centric */}
              <div className="md:w-1/2 md:pr-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8892936558067!2d-3.7043286!3d40.4199643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705b47d%3A0x4e01c74c3b1a5c8d!2sHyatt%20Centric%20Gran%20Via%20Madrid!5e0!3m2!1ses!2ses!4v1625678901234!5m2!1ses!2ses"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hyatt Centric Gran Vía Madrid"
                  ></iframe>
                  <div className="p-4">
                    <a
                      href="https://maps.google.com/?q=Hyatt+Centric+Gran+Via+Madrid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
                    >
                      <Navigation className="w-4 h-4" />
                      Cómo llegar al hotel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional práctica */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Información práctica
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                🎯 La ceremonia
              </h4>
              <p className="text-gray-600 mb-4">
                En la Casa del Reloj está el Belén, así que{" "}
                <b>el enlace es en el Auditorio de Nuevas Dependencias</b> del
                mismo recinto.
              </p>

              <h4 className="font-semibold text-gray-700 mb-3">
                🚗 Aparcamiento
              </h4>
              <p className="text-gray-600">
                <strong>Casa del Reloj:</strong> Zona azul y parkings públicos
                <br />
                <strong>Hyatt Centric:</strong> Parkings públicos
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">
                🕒 Horarios detallados
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>12:00h</strong> - Llegada al Auditorio Nuevas
                  Dependencias
                </p>
                <p>
                  <strong>12:15h</strong> - Ceremonia (10 min)
                </p>
                <p>
                  <strong>13:00h</strong> - Traslado al hotel
                </p>
                <p>
                  <strong>13:30h</strong> - Inicio cocktail en Hyatt
                </p>
                <p>
                  <strong>20:00h</strong> - Fin oficial (pero la fiesta sigue
                  para los que quieran)
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-3 mt-4">
                <p className="text-sm text-purple-800">
                  <strong>20:30h </strong> 🍾🍾{" "}
                  <strong>After party: Ciriaco Brown </strong> 🍾🍾
                </p>
                <p className="text-sm">
                  {" "}
                  <a
                    href="https://maps.app.goo.gl/Eacfh3VDH4dRYtPy8"
                    target="_blank"
                  >
                    Calle de los Abades, 13
                  </a>
                </p>
                <p className="text-sm">
                  Iremos dando un paseo de 15 minutos por el centro de Madrid.
                  Así nos da un poco el fresquito y nos despejamos.
                </p>
                <p className="text-sm">
                  Quien tenga imposibilidad de caminar debido al atuendo que ha
                  seleccionado y requiera de taxi para llegar, que nos lo
                  comunique.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Widget del tiempo */}
        <WeatherWidget />
      </div>
    </section>
  );
}
