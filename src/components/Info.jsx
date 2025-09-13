import React, { useState } from "react";
import {
  Shirt,
  Navigation,
  Snowflake,
  Phone,
  Gift,
  Clock,
  MapPin,
  AlertTriangle,
  Sparkles,
  Heart,
} from "lucide-react";

export default function UsefulThingsSection() {
  const [activeTab, setActiveTab] = useState("dresscode");

  const tabs = [
    { id: "dresscode", label: "👔 Dress Code", icon: Shirt },
    { id: "transport", label: "🚗 Transporte", icon: Navigation },
    { id: "weather", label: "❄️ Tiempo", icon: Snowflake },
    { id: "tips", label: "💡 Consejos", icon: Sparkles },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dresscode":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                ¡No hay dress code!
              </h3>
              <p className="text-xl text-gray-600">
                Ven como te sientas más cómodo/a
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-pink-500" />
                  <h4 className="font-bold text-gray-800">Lo más importante</h4>
                </div>
                <p className="text-gray-700">
                  Que te sientas cómodo/a y feliz. No nos importa si vienes en
                  traje, vestido, vaqueros o tu camiseta favorita. ¡Lo que
                  importa es que estés ahí!
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-gray-800">¡Es tu momento!</h4>
                </div>
                <p className="text-gray-700">
                  ¿Siempre quisiste llevar esa camisa hawaiana a una boda? ¿O
                  ese vestido súper elegante? ¡AHORA ES EL MOMENTO! Atrévete.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <h4 className="font-bold text-gray-800 mb-3">Algunas ideas:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">🤵</div>
                  <p>Súper elegante</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-gala.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">👕</div>
                  <p>Casual y cómodo</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-casual.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">🎪</div>
                  <p>Look vintage</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-vintage.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">🎭</div>
                  <p>Look artístico</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-artistico.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">💃</div>
                  <p>Flamenca/o</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-flamenco.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">👟</div>
                  <p>Chandalero</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-chandal.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">👰</div>
                  <p>Attention whore</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-boda.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl mb-2">✨</div>
                  <p>¡Como quieras!</p>
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/p-prision.png"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-center">
                <strong>💚 Resumen:</strong> No hay reglas. Solo ven como te
                haga feliz y te sientas tú mismo/a. De verdad.
              </p>
            </div>
          </div>
        );

      case "transport":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Cómo moverte por Madrid
              </h3>
              <p className="text-xl text-gray-600">
                Consejos para el día de la boda
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">
                    ⚠️ Aviso importante - Época navideña
                  </h4>
                  <p className="text-yellow-800">
                    El centro de Madrid en diciembre está{" "}
                    <strong>muy concurrido</strong> por las compras navideñas y
                    turismo. Calcula tiempo extra para desplazamientos y
                    posibles aglomeraciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🚇 Metro (Recomendado)
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Casa del Reloj:</p>
                    <p className="text-gray-600">
                      Legazpi (L3, L6) + 5 min andando
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Consejo:</strong> Es la opción más rápida y
                      evita atascos navideños.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  🚗 Coche / Taxi / Uber
                </h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 rounded-lg p-3">
                    <p className="text-sm text-orange-800">
                      ⏰ <strong>Tiempo extra:</strong> +15-30 min por tráfico
                      navideño
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Parking Casa del Reloj:</p>
                    <p className="text-gray-600">
                      Zona azul y parkings públicos cercanos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">
                🚶 Entre localizaciones
              </h4>

              <p className="text-sm text-indigo-800">
                💡 Cuando llega el frío las tiendas de Gran Vía y sus aceras se
                llenan de gente, así que aunque no sea lo más glamuroso, lo más
                rápido y práctico va a ser coger la línea 3 de metro en Legazpi
                y bajarse en Callao.
              </p>
              <p className="text-sm text-indigo-800">
                Nuestra carroza tirada por ponys, muy a nuestro pesar, la vamos
                a dejar para otra ocasión.
              </p>
            </div>
          </div>
        );

      case "weather":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                El tiempo en diciembre
              </h3>
              <p className="text-xl text-gray-600">
                ¿Qué esperar el 20 de diciembre?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🌡️</div>
                <h4 className="font-bold text-gray-800 mb-2">Temperatura</h4>
                <p className="text-gray-600">
                  <strong>Máx:</strong> 10-12°C
                  <br />
                  <strong>Mín:</strong> 2-5°C
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">☁️</div>
                <h4 className="font-bold text-gray-800 mb-2">Cielo</h4>
                <p className="text-gray-600">
                  Posibles nubes
                  <br />
                  Puede que llueva
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🧥</div>
                <h4 className="font-bold text-gray-800 mb-2">Qué llevar</h4>
                <p className="text-gray-600">
                  Abrigo, bufanda
                  <br />
                  Paraguas por si acaso
                </p>
              </div>
            </div>
          </div>
        );

      case "tips":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Consejos útiles
              </h3>
              <p className="text-xl text-gray-600">
                Para que todo salga perfecto
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-gray-800">Horarios</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Llega a las 12:00h (ceremonia a las 12:15h)</li>
                  <li>
                    • La ceremonia dura 10 minutos. Todavía no sabemos el aforo
                    que nos van a dejar en la Casa del Reloj porque van a casar
                    a las parejas en modo churrería.
                  </li>
                  <li>• Después vamos al lugar de celebración</li>
                  <li>• El cocktail empieza hacia las 13:30h</li>
                  <li>
                    • Cuando nos echen, seguiremos la fiesta por algún lado
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-gray-800">Contacto</h4>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Novios:</strong>
                  </p>
                  <p>639 663 657 </p>
                  <p>699 271 366</p>
                  <p>
                    <a href="mailto:hola@20d.es">hola@20d.es</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-3 text-center">
                🎁 Regalos
              </h4>
              <p className="text-gray-700 text-center mb-4">
                Vuestra presencia es nuestro mejor regalo. Si queréis
                contribuir, tenéis la opción en la sección "Contribuye" de esta
                web.
              </p>
              <div className="text-center">
                <Gift className="w-8 h-8 text-pink-500 mx-auto" />
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-center">
                <strong>🚫 Recordatorio:</strong> No lanzar arroz, confeti,
                petardos, papeles, ni pétalos en la Casa del Reloj (es un
                recinto municipal con normativas estrictas).
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Cosas útiles
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber para disfrutar al máximo
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">{renderContent()}</div>
      </div>
    </section>
  );
}
