import React, { useState, useEffect } from "react";
import { Heart, Sparkles, ArrowDown, Clock, Users, Lock } from "lucide-react";

export default function FunIntroSection() {
  const [currentAlias, setCurrentAlias] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [revealStep, setRevealStep] = useState(0);
  const [yearsCounter, setYearsCounter] = useState(0);

  const aliases = ["iko", "Bitxu", "Francis", "Saralegui", "Javi"];

  useEffect(() => {
    const aliasInterval = setInterval(() => {
      setCurrentAlias((prev) => (prev + 1) % aliases.length);
    }, 1500);
    return () => clearInterval(aliasInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (yearsCounter < 25) {
        setYearsCounter((prev) => prev + 1);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [yearsCounter]);

  const handleRevealNext = () => {
    setRevealStep((prev) => prev + 1);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Mystery Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            ¡Pero esto qué es!
          </h2>

          <div className="max-w-2xl mx-auto space-y-4 text-lg text-gray-200">
            <p className="animate-fade-in">
              Si has llegado hasta aquí es que ya te hemos comunicado que nos
              casamos en unos días.
            </p>
            <p className="text-yellow-400 animate-pulse">
              ¡Y queremos que celebres ese día con nostros!
            </p>
          </div>
        </div>

        {/* Step by step revelation */}
        <div className="space-y-8">
          {/* Step 1: The question */}
          <div className="text-center">
            {revealStep === 0 && (
              <button
                onClick={handleRevealNext}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 animate-bounce"
              >
                ¡Quiero saber más!
              </button>
            )}
          </div>

          {/* Step 2: The connection */}
          {revealStep >= 1 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-slide-up">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ya conoces a...</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">S</span>
                  </div>
                  <h4 className="text-xl font-bold">Sebas</h4>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">J</span>
                  </div>
                  <h4 className="text-xl font-bold">
                    Javi <span className="text-sm text-gray-300">aka</span>{" "}
                    <span className="text-pink-400 font-mono animate-pulse">
                      {aliases[currentAlias]}
                    </span>
                  </h4>
                </div>
              </div>

              {revealStep === 1 && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleRevealNext}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                  >
                    ¡Sí, los conozco! 🤔
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 3: The photo */}
          {revealStep >= 2 && (
            <div className="text-center animate-slide-up">
              <p className="text-xl text-gray-200 mb-6">
                Pero como en algunos casos y por circunstancias de la vida no
                nos vemos mucho, te damos una pista...
              </p>

              <div className="relative inline-block">
                <div className="bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src="/sebiko3.jpg"
                      alt="Sebas y Javi"
                      className="max-w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center animate-pulse">
                  <Heart className="w-4 h-4" />
                </div>
              </div>

              {revealStep === 2 && (
                <div className="mt-8">
                  <button
                    onClick={handleRevealNext}
                    className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                  >
                    ¡Ahora sí os recuerdo! 💕
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 4: The big reveal */}
          {revealStep >= 3 && (
            <div className="text-center animate-slide-up">
              <div className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 rounded-2xl p-8 mb-8">
                <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-4 animate-spin" />
                <h3 className="text-3xl font-bold mb-4">
                  Y como te hemos comentado, ¡te invitamos a nuestras primeras
                  nupcias!
                </h3>

                <div className="flex items-center justify-center gap-4 text-2xl mb-4">
                  <span>Hace ya</span>
                  <div className="bg-white/20 rounded-lg px-4 py-2 font-mono font-bold">
                    {yearsCounter}
                  </div>
                  <span>años que nos conocemos</span>
                </div>

                <p className="text-xl text-pink-100">
                  Así que va siendo hora de que formalicemos lo nuestro y dejar
                  el pecado de un lado...
                </p>
              </div>

              <div className="animate-bounce">
                <ArrowDown className="w-8 h-8 text-pink-400 mx-auto" />
                <p className="text-pink-400 mt-2">
                  ¡Sigue leyendo para todos los detalles!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
