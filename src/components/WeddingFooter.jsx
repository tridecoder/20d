import React, { useState } from "react";
import {
  Heart,
  Mail,
  Sparkles,
  Calendar,
  MapPin,
  Users,
  Copy,
  Check,
} from "lucide-react";

export default function WeddingFooter() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hola@20d.es");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = "hola@20d.es";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Sección principal */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            {/* Logo/Título */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent">
                Sebas & Javi
              </h2>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Fecha destacada */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Calendar className="w-5 h-5 text-pink-300" />
              <span className="text-xl font-medium">
                20 de diciembre de 2025
              </span>
            </div>

            {/* Mensaje especial */}
            <p className="text-lg text-pink-100 max-w-2xl mx-auto mb-8">
              Gracias por ser parte de nuestra historia. ¡No podemos esperar a
              celebrar con vosotros!
            </p>
          </div>

          {/* Navegación rápida */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <button
              onClick={() => scrollToSection("cuando")}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all group"
            >
              <MapPin className="w-8 h-8 text-pink-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">¿Cuándo y dónde?</h3>
              <p className="text-sm text-pink-200">Toda la info del día</p>
            </button>

            <button
              onClick={() => scrollToSection("info")}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all group"
            >
              <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Cosas útiles</h3>
              <p className="text-sm text-purple-200">Consejos y tips</p>
            </button>

            <button
              onClick={() => scrollToSection("asistencia")}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all group"
            >
              <Users className="w-8 h-8 text-rose-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Confirmación</h3>
              <p className="text-sm text-rose-200">¡Dinos si vienes!</p>
            </button>

            <button
              onClick={() => scrollToSection("regalo")}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all group"
            >
              <Heart className="w-8 h-8 text-pink-300 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-1">Contribuir</h3>
              <p className="text-sm text-pink-200">Si quieres ayudar</p>
            </button>
          </div>

          {/* Contacto destacado */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-pink-300" />
              <h3 className="text-2xl font-bold">¿Tienes alguna pregunta?</h3>
            </div>

            <p className="text-pink-100 mb-6">
              No dudes en escribirnos para cualquier cosa que necesites
            </p>

            <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
              <div className="flex-1 bg-white/20 rounded-lg p-4">
                <p className="text-xl font-mono font-bold">hola@20d.es</p>
              </div>

              <button
                onClick={copyEmail}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  emailCopied
                    ? "bg-green-500 text-white"
                    : "bg-pink-500 hover:bg-pink-600 text-white hover:scale-105"
                }`}
              >
                {emailCopied ? (
                  <>
                    <Check size={18} />
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copiar
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-pink-200 mt-4">
              📧 Te responderemos lo antes posible
            </p>
          </div>
        </div>

        {/* Línea divisoria decorativa */}
        <div className="border-t border-white/20"></div>

        {/* Copyright y créditos */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-pink-200">
                © 2025 Sebas & Javi • Hecho con 💕 y mucha ilusión
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-pink-300 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <span className="text-pink-200 ml-2">¡Nos vemos pronto!</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
}
