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
      title: "¿Vendrás acompañado/a/e?",
      subtitle: "Queremos asegurarnos de tener sitio para todos",
    },
    {
      id: "companionName",
      title: "¿Cuál es el nombre de tu acompañante?",
      subtitle:
        "Para saber cuántos vamos a ser. Si vienes con hijes, triejas o demás, pon el nombre de todos los que te vayan a acompañar.",
    },
    {
      id: "dietary",
      title: "¿Tienes alguna alergia o restricción dietética?",
      subtitle:
        "Vegetariano, vegano, sin gluten, alergias, etc. Queremos que disfrutes sin preocupaciones",
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
    // Encontrar el siguiente paso válido
    for (let i = currentStep + 1; i < steps.length; i++) {
      if (shouldShowStep(steps[i].id)) {
        setCurrentStep(i);
        return;
      }
    }
    // Si no hay más pasos válidos, ir al último
    setCurrentStep(steps.length - 1);
  };

  const prevStep = () => {
    // Encontrar el paso anterior válido
    for (let i = currentStep - 1; i >= 0; i--) {
      if (shouldShowStep(steps[i].id)) {
        setCurrentStep(i);
        return;
      }
    }
    // Si no hay pasos anteriores válidos, ir al primero
    setCurrentStep(0);
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
      stepId === "dietary" ||
      stepId === "song"
    ) {
      return formData.attendance === "yes";
    }
    return true;
  };

  const handleSubmit = async () => {
    try {
      // Reemplaza estos valores con los tuyos de Airtable
      const AIRTABLE_BASE_ID = "appnWpnysi5zAjHxd";
      const AIRTABLE_TOKEN =
        "patB9ihm15I47cMaM.f36701f827dcc8898c9b9056922a2ce2dc40434f9ce12694f4f985c47d331516"; // Empieza con 'pat...'
      const AIRTABLE_TABLE_NAME = "tblL9ICRb0KusuijG"; // o tu Table ID

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: formData.name,
                  Email: formData.email,
                  Attendance:
                    formData.attendance === "yes"
                      ? "Sí"
                      : formData.attendance === "maybe"
                      ? "Todavía no lo sé"
                      : "No",
                  Companion: formData.companion === "yes" ? "Sí" : "No",
                  "Companion Name": formData.companionName || "",
                  "Dietary Info": formData.dietary || "",
                  Song: formData.song || "",
                  Comments: formData.comments || "",
                  Submitted: new Date().toISOString().split("T")[0],
                },
              },
            ],
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        nextStep();
      } else {
        const errorData = await response.json();
        console.error("Error completo:", errorData);
        throw new Error(
          `Error ${response.status}: ${JSON.stringify(errorData)}`
        );
      }
    } catch (error) {
      console.error("Error detallado:", error);
      alert(
        "Error al enviar el formulario. Revisa la consola para más detalles."
      );
    }
  };

  const renderStepContent = () => {
    const step = steps[currentStep];

    switch (step.id) {
      case "welcome":
        return (
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">👬</div>
            <p className="text-xl text-gray-600">
              Tu confirmación nos ayuda a preparar la celebración
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
            {[
              {
                value: "yes",
                icon: Heart,
                text: "¡Sí, estaré ahí!",
                color: "rose",
              },
              {
                value: "maybe",
                icon: AlertCircle,
                text: "Todavía no lo sé",
                color: "amber",
              },
              {
                value: "no",
                icon: AlertCircle,
                text: "No podré asistir",
                color: "gray",
              },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleInputChange("attendance", option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                  formData.attendance === option.value
                    ? `border-${option.color}-500 bg-${option.color}-50`
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <option.icon
                    className={`text-${option.color}-500`}
                    size={24}
                  />
                  <span className="text-xl">{option.text}</span>
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

      case "dietary":
        return (
          <div className="space-y-4">
            <textarea
              value={formData.dietary}
              onChange={(e) => handleInputChange("dietary", e.target.value)}
              placeholder="Déjalo en blanco si no tienes ninguna..."
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

  // Calcular pasos visibles y progreso real
  const getVisibleSteps = () => {
    let visible = [];
    for (let i = 0; i <= currentStep; i++) {
      if (shouldShowStep(steps[i].id)) {
        visible.push(steps[i]);
      }
    }
    // Añadir pasos futuros que sabemos que se mostrarán
    for (let i = currentStep + 1; i < steps.length; i++) {
      if (steps[i].id === "thanks") {
        visible.push(steps[i]);
        break;
      }
      if (
        formData.attendance === "yes" &&
        ["companion", "dietary", "song", "comments"].includes(steps[i].id)
      ) {
        visible.push(steps[i]);
      }
      if (formData.attendance === "maybe" && steps[i].id === "comments") {
        visible.push(steps[i]);
      }
      if (formData.attendance === "no" && steps[i].id === "comments") {
        visible.push(steps[i]);
      }
      if (formData.companion === "yes" && steps[i].id === "companionName") {
        visible.push(steps[i]);
      }
    }
    return visible;
  };

  const visibleSteps = getVisibleSteps();
  const currentVisibleStepIndex = visibleSteps.findIndex(
    (step) => step.id === steps[currentStep].id
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Paso {currentVisibleStepIndex + 1} de {visibleSteps.length}
            </span>
            <span>
              {Math.round(
                ((currentVisibleStepIndex + 1) / visibleSteps.length) * 100
              )}
              %
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-rose-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentVisibleStepIndex + 1) / visibleSteps.length) * 100
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
