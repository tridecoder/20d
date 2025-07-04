import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Heart,
  Users,
  MessageCircle,
  AlertCircle,
  Check,
} from "lucide-react";

export default function WeddingRSVPForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    companion: "",
    companionName: "",
    allergies: "",
    dietaryRestrictions: "",
    comments: "",
    song: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    {
      id: "welcome",
      title: "¡Hola! 👋",
      subtitle: "Nos encanta que formes parte de nuestro día especial",
    },
    {
      id: "name",
      title: "¿Cuál es tu nombre completo?",
      subtitle: "Para poder identificarte en nuestra lista",
    },
    {
      id: "email",
      title: "¿Cuál es tu email?",
      subtitle: "Te enviaremos los detalles finales del evento",
    },
    {
      id: "attendance",
      title: "¿Podrás acompañarnos?",
      subtitle: "Esperamos que sí, pero lo entendemos si no puedes",
    },
    {
      id: "companion",
      title: "¿Vendrás acompañado/a?",
      subtitle: "Queremos asegurarnos de tener sitio para todos",
    },
    {
      id: "companionName",
      title: "¿Cuál es el nombre de tu acompañante?",
      subtitle: "Para preparar su tarjeta de mesa",
    },
    {
      id: "allergies",
      title: "¿Tienes alguna alergia alimentaria?",
      subtitle: "Queremos que disfrutes de la comida sin preocupaciones",
    },
    {
      id: "diet",
      title: "¿Alguna restricción dietética?",
      subtitle: "Vegetariano, vegano, sin gluten, etc.",
    },
    {
      id: "song",
      title: "¿Qué canción no puede faltar?",
      subtitle: "Ayúdanos a crear la playlist perfecta",
    },
    {
      id: "comments",
      title: "¿Algún comentario especial?",
      subtitle: "Cualquier cosa que quieras decirnos",
    },
    {
      id: "thanks",
      title: "¡Muchas gracias! 💕",
      subtitle: "Hemos recibido tu confirmación",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    const step = steps[currentStep];
    switch (step.id) {
      case "name":
        return formData.name.trim().length > 0;
      case "email":
        return formData.email.includes("@");
      case "attendance":
        return formData.attendance !== "";
      case "companion":
        return formData.companion !== "";
      case "companionName":
        return (
          formData.companion === "no" ||
          formData.companionName.trim().length > 0
        );
      default:
        return true;
    }
  };

  const shouldShowStep = (stepId) => {
    if (stepId === "companionName") {
      return formData.companion === "yes";
    }
    if (
      stepId === "companion" ||
      stepId === "companionName" ||
      stepId === "allergies" ||
      stepId === "diet" ||
      stepId === "song" ||
      stepId === "comments"
    ) {
      return formData.attendance === "yes";
    }
    return true;
  };

  const handleSubmit = async () => {
    console.log("🚀 Iniciando envío del formulario...");
    console.log("📋 Datos a enviar:", formData);

    try {
      // Crear datos para Netlify en formato correcto
      const formDataToSend = {
        "form-name": "wedding-rsvp",
        name: formData.name,
        email: formData.email,
        attendance: formData.attendance,
        companion: formData.companion,
        companionName: formData.companionName,
        allergies: formData.allergies,
        dietaryRestrictions: formData.dietaryRestrictions,
        song: formData.song,
        comments: formData.comments,
      };

      console.log("📤 Enviando datos:", formDataToSend);

      // Enviar a Netlify
      const response = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend).toString(),
      });

      console.log(
        "📨 Respuesta recibida:",
        response.status,
        response.statusText
      );

      if (response.ok) {
        console.log("✅ Formulario enviado correctamente");
        setIsSubmitted(true);
        nextStep();
      } else {
        console.error(
          "❌ Error response:",
          response.status,
          response.statusText
        );
        alert("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("💥 Error:", error);
      alert("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
    }
  };

  const renderStepContent = () => {
    const step = steps[currentStep];

    switch (step.id) {
      case "welcome":
        return (
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">💍</div>
            <p className="text-xl text-gray-600">
              Tu confirmación nos ayuda a preparar el día perfecto
            </p>
            <button
              onClick={nextStep}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              Comenzar <ChevronRight size={20} />
            </button>
          </div>
        );

      case "name":
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Tu nombre completo"
              className="w-full text-2xl border-none outline-none bg-transparent border-b-2 border-gray-300 focus:border-rose-500 pb-2"
              autoFocus
            />
          </div>
        );

      case "email":
        return (
          <div className="space-y-4">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="tu.email@ejemplo.com"
              className="w-full text-2xl border-none outline-none bg-transparent border-b-2 border-gray-300 focus:border-rose-500 pb-2"
              autoFocus
            />
          </div>
        );

      case "attendance":
        return (
          <div className="space-y-4">
            {["yes", "no"].map((option) => (
              <button
                key={option}
                onClick={() => handleInputChange("attendance", option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                  formData.attendance === option
                    ? "border-rose-500 bg-rose-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  {option === "yes" ? (
                    <Heart className="text-rose-500" size={24} />
                  ) : (
                    <AlertCircle className="text-gray-400" size={24} />
                  )}
                  <span className="text-xl">
                    {option === "yes" ? "¡Sí, estaré ahí!" : "No podré asistir"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        );

      case "companion":
        return (
          <div className="space-y-4">
            {["yes", "no"].map((option) => (
              <button
                key={option}
                onClick={() => handleInputChange("companion", option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                  formData.companion === option
                    ? "border-rose-500 bg-rose-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users
                    className={
                      option === "yes" ? "text-rose-500" : "text-gray-400"
                    }
                    size={24}
                  />
                  <span className="text-xl">
                    {option === "yes"
                      ? "Sí, vendré acompañado/a"
                      : "No, iré solo/a"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        );

      case "companionName":
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={formData.companionName}
              onChange={(e) =>
                handleInputChange("companionName", e.target.value)
              }
              placeholder="Nombre de tu acompañante"
              className="w-full text-2xl border-none outline-none bg-transparent border-b-2 border-gray-300 focus:border-rose-500 pb-2"
              autoFocus
            />
          </div>
        );

      case "allergies":
        return (
          <div className="space-y-4">
            <textarea
              value={formData.allergies}
              onChange={(e) => handleInputChange("allergies", e.target.value)}
              placeholder="Déjalo en blanco si no tienes alergias"
              className="w-full text-xl border-none outline-none bg-transparent border-b-2 border-gray-300 focus:border-rose-500 pb-2 resize-none"
              rows="3"
              autoFocus
            />
          </div>
        );

      case "diet":
        return (
          <div className="space-y-4">
            <textarea
              value={formData.dietaryRestrictions}
              onChange={(e) =>
                handleInputChange("dietaryRestrictions", e.target.value)
              }
              placeholder="Vegetariano, vegano, sin gluten, etc."
              className="w-full text-xl border-none outline-none bg-transparent border-b-2 border-gray-300 focus:border-rose-500 pb-2 resize-none"
              rows="3"
              autoFocus
            />
          </div>
        );

      case "song":
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={formData.song}
              onChange={(e) => handleInputChange("song", e.target.value)}
              placeholder="Esa canción que te hace bailar..."
              className="w-full text-2xl border-none outline-none bg-transparent border-b-2 border-gray-300 focus:border-rose-500 pb-2"
              autoFocus
            />
          </div>
        );

      case "comments":
        return (
          <div className="space-y-4">
            <textarea
              value={formData.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
              placeholder="Cualquier cosa que quieras decirnos..."
              className="w-full text-xl border-none outline-none bg-transparent border-b-2 border-gray-300 focus:border-rose-500 pb-2 resize-none"
              rows="4"
              autoFocus
            />
          </div>
        );

      case "thanks":
        return (
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-xl text-gray-600">
              ¡Perfecto! Ya tenemos toda la información que necesitamos.
            </p>
            <p className="text-lg text-gray-500">
              Te enviaremos más detalles por email próximamente.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
              <div className="flex items-center gap-2 text-green-700">
                <Check size={20} />
                <span>Confirmación enviada correctamente</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Filtrar pasos que no se deben mostrar
  const visibleSteps = steps.filter((step) => shouldShowStep(step.id));
  const currentVisibleStep = visibleSteps.findIndex(
    (step) => step.id === steps[currentStep].id
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Paso {currentVisibleStep + 1} de {visibleSteps.length}
            </span>
            <span>
              {Math.round(
                ((currentVisibleStep + 1) / visibleSteps.length) * 100
              )}
              %
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-rose-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentVisibleStep + 1) / visibleSteps.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {steps[currentStep].title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {steps[currentStep].subtitle}
          </p>

          {renderStepContent()}
        </div>

        {/* Navigation */}
        {steps[currentStep].id !== "welcome" &&
          steps[currentStep].id !== "thanks" && (
            <div className="flex justify-between items-center">
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ChevronLeft size={20} />
                Anterior
              </button>

              {steps[currentStep].id === "comments" ? (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Enviar confirmación ✨
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-colors ${
                    canProceed()
                      ? "bg-rose-500 hover:bg-rose-600 text-white"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Siguiente <ChevronRight size={20} />
                </button>
              )}
            </div>
          )}
      </div>
    </div>
  );
}
