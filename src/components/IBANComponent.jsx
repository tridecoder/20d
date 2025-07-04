import React, { useState } from "react";
import { Copy, Check, Gift } from "lucide-react";

export default function IBANComponent() {
  const [copied, setCopied] = useState(false);

  // Reemplaza este IBAN por el tuyo real
  const IBAN = "ES91 2100 0418 4502 0005 1332";

  const copyToClipboard = async () => {
    try {
      // Copiar IBAN sin espacios
      await navigator.clipboard.writeText(IBAN.replace(/\s/g, ""));
      setCopied(true);

      // Resetear el estado después de 2 segundos
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = IBAN.replace(/\s/g, "");
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Gift className="w-8 h-8 text-rose-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          ¿Quieres contribuir?
        </h3>
        <p className="text-gray-600 text-sm">
          Tu presencia es nuestro mejor regalo, pero si quieres ayudarnos...
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Número de cuenta
            </p>
            <p className="font-mono text-lg font-medium text-gray-800">
              {IBAN}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={copyToClipboard}
        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
          copied
            ? "bg-green-500 text-white"
            : "bg-rose-500 hover:bg-rose-600 text-white hover:shadow-md"
        }`}
      >
        {copied ? (
          <>
            <Check size={20} />
            ¡Copiado!
          </>
        ) : (
          <>
            <Copy size={20} />
            Copiar IBAN
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-3">
        Haz clic para copiar el número sin espacios
      </p>
    </div>
  );
}
