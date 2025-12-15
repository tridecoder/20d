import React, { useState, useEffect } from "react";
import {
  Cloud,
  CloudRain,
  CloudSnow,
  Sun,
  CloudDrizzle,
  Wind,
  Droplets,
  Eye,
  CloudFog,
  Zap,
} from "lucide-react";

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Coordenadas de Madrid
  const MADRID_LAT = 40.4168;
  const MADRID_LON = -3.7038;
  const WEDDING_DATE = "2025-12-20";

  // Función para obtener el icono y descripción según el código WMO del clima
  // https://open-meteo.com/en/docs
  const getWeatherIcon = (weatherCode) => {
    const iconProps = { className: "w-8 h-8" };

    // Códigos WMO Weather interpretation
    if (weatherCode === 0) {
      return <Sun {...iconProps} className="w-8 h-8 text-yellow-400" />;
    } else if (weatherCode >= 1 && weatherCode <= 3) {
      return <Cloud {...iconProps} className="w-8 h-8 text-gray-400" />;
    } else if (weatherCode >= 45 && weatherCode <= 48) {
      return <CloudFog {...iconProps} className="w-8 h-8 text-gray-400" />;
    } else if (weatherCode >= 51 && weatherCode <= 67) {
      return <CloudDrizzle {...iconProps} className="w-8 h-8 text-blue-400" />;
    } else if (weatherCode >= 71 && weatherCode <= 77) {
      return <CloudSnow {...iconProps} className="w-8 h-8 text-blue-300" />;
    } else if (weatherCode >= 80 && weatherCode <= 82) {
      return <CloudRain {...iconProps} className="w-8 h-8 text-blue-600" />;
    } else if (weatherCode >= 95 && weatherCode <= 99) {
      return <Zap {...iconProps} className="w-8 h-8 text-yellow-500" />;
    }
    return <Cloud {...iconProps} className="w-8 h-8 text-gray-400" />;
  };

  // Función para traducir códigos WMO del clima
  const translateWeather = (weatherCode) => {
    const translations = {
      0: "Despejado",
      1: "Principalmente despejado",
      2: "Parcialmente nublado",
      3: "Nublado",
      45: "Niebla",
      48: "Niebla con escarcha",
      51: "Llovizna ligera",
      53: "Llovizna moderada",
      55: "Llovizna densa",
      61: "Lluvia ligera",
      63: "Lluvia moderada",
      65: "Lluvia intensa",
      71: "Nieve ligera",
      73: "Nieve moderada",
      75: "Nieve intensa",
      80: "Chubascos ligeros",
      81: "Chubascos moderados",
      82: "Chubascos intensos",
      95: "Tormenta",
      96: "Tormenta con granizo ligero",
      99: "Tormenta con granizo intenso",
    };

    return translations[weatherCode] || "Desconocido";
  };

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      // Open-Meteo API - No requiere API key
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${MADRID_LAT}&longitude=${MADRID_LON}&hourly=temperature_2m,weathercode,relativehumidity_2m,windspeed_10m,precipitation_probability,apparent_temperature&timezone=Europe/Madrid&forecast_days=16`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }

      const data = await response.json();

      // Convertir datos de Open-Meteo al formato que usamos
      const hourlyData = data.hourly.time.map((time, index) => ({
        dt: new Date(time).getTime() / 1000, // Convertir a timestamp Unix
        main: {
          temp: data.hourly.temperature_2m[index],
          feels_like: data.hourly.apparent_temperature[index],
          humidity: data.hourly.relativehumidity_2m[index],
        },
        weather: [
          {
            id: data.hourly.weathercode[index],
            description: translateWeather(data.hourly.weathercode[index]),
          },
        ],
        wind: {
          speed: data.hourly.windspeed_10m[index],
        },
        pop: data.hourly.precipitation_probability[index] / 100, // Convertir de % a decimal
      }));

      // Filtrar solo los datos del 20 de diciembre de 2025
      const weddingDayData = hourlyData.filter((item) => {
        const itemDate = new Date(item.dt * 1000);
        const itemDateStr = itemDate.toISOString().split("T")[0];
        return itemDateStr === WEDDING_DATE;
      });

      // Si no hay datos específicos para esa fecha o son insuficientes,
      // mostrar los próximos datos disponibles (24 registros = ~24 horas)
      const displayData =
        weddingDayData.length >= 8 ? weddingDayData : hourlyData.slice(0, 24);

      setWeatherData({
        city: "Madrid",
        hourlyData: displayData,
        isWeddingDay: weddingDayData.length >= 8,
      });

      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(
        `No se pudo cargar la información del clima: ${err.message}. Inténtalo más tarde.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();

    // Actualizar cada 30 minutos
    const interval = setInterval(fetchWeatherData, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading && !weatherData) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mt-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <span className="ml-4 text-gray-600">
            Cargando información del clima...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mt-8">
        <div className="text-center">
          <Cloud className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">{error}</p>
          <button
            onClick={fetchWeatherData}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl mt-8">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 opacity-95"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              El Tiempo en Madrid
            </h3>
            <p className="text-blue-200 text-lg">20 de diciembre de 2025</p>
          </div>
          {lastUpdate && (
            <span className="text-sm text-blue-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Actualizado a las {lastUpdate.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(() => {
          // Agrupar datos por período del día
          const periods = {
            morning: {
              name: "Mañana",
              hours: [],
              timeRange: "6:00 - 12:00",
            },
            afternoon: {
              name: "Tarde",
              hours: [],
              timeRange: "12:00 - 18:00",
            },
            night: { name: "Noche", hours: [], timeRange: "18:00 - 00:00" },
          };

          weatherData?.hourlyData.forEach((hour) => {
            const date = new Date(hour.dt * 1000);
            const hourOfDay = date.getHours();

            if (hourOfDay >= 6 && hourOfDay < 12) {
              periods.morning.hours.push(hour);
            } else if (hourOfDay >= 12 && hourOfDay < 18) {
              periods.afternoon.hours.push(hour);
            } else if (hourOfDay >= 18 || hourOfDay < 6) {
              periods.night.hours.push(hour);
            }
          });

          return Object.values(periods).map((period, index) => {
            if (period.hours.length === 0) return null;

            // Calcular promedios para el período
            const avgTemp = Math.round(
              period.hours.reduce((sum, h) => sum + h.main.temp, 0) /
                period.hours.length
            );
            const avgFeelsLike = Math.round(
              period.hours.reduce((sum, h) => sum + h.main.feels_like, 0) /
                period.hours.length
            );
            const avgHumidity = Math.round(
              period.hours.reduce((sum, h) => sum + h.main.humidity, 0) /
                period.hours.length
            );
            const avgWindSpeed = Math.round(
              period.hours.reduce((sum, h) => sum + h.wind.speed, 0) /
                period.hours.length
            );
            const maxPrecipitation = Math.max(
              ...period.hours.map((h) => h.pop * 100)
            );

            // Tomar la condición más común o la del medio del período
            const middleHour =
              period.hours[Math.floor(period.hours.length / 2)];
            const weatherCode = middleHour.weather[0].id;
            const description = translateWeather(weatherCode);

            // Gradientes dinámicos por período
            const periodGradients = {
              morning:
                "from-orange-400/20 via-yellow-400/20 to-amber-500/20",
              afternoon: "from-blue-400/20 via-cyan-400/20 to-sky-500/20",
              night: "from-indigo-500/20 via-purple-500/20 to-violet-600/20",
            };

            const periodColors = {
              morning: {
                text: "text-orange-100",
                accent: "text-orange-300",
                icon: "text-orange-400",
              },
              afternoon: {
                text: "text-blue-100",
                accent: "text-cyan-300",
                icon: "text-cyan-400",
              },
              night: {
                text: "text-indigo-100",
                accent: "text-purple-300",
                icon: "text-purple-400",
              },
            };

            const periodKey =
              index === 0 ? "morning" : index === 1 ? "afternoon" : "night";
            const colors = periodColors[periodKey];

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${periodGradients[periodKey]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h4 className={`text-2xl font-bold ${colors.text} mb-1`}>
                      {period.name}
                    </h4>
                    <p className={`text-sm ${colors.accent} opacity-80`}>
                      {period.timeRange}
                    </p>
                  </div>

                  {/* Weather Icon - Animated */}
                  <div className="flex justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <div className="relative">
                      {React.cloneElement(getWeatherIcon(weatherCode), {
                        className: `w-20 h-20 ${colors.icon} drop-shadow-lg`,
                      })}
                      <div className="absolute inset-0 bg-current opacity-20 blur-xl animate-pulse"></div>
                    </div>
                  </div>

                  {/* Temperature */}
                  <div className="text-center mb-6">
                    <p
                      className={`text-7xl font-bold ${colors.text} mb-6 tracking-tight leading-none`}
                    >
                      {avgTemp}°
                    </p>

                    {/* Sensación térmica */}
                    <div className="max-w-xs mx-auto mb-6">
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10">
                        <p className={`text-[10px] ${colors.accent} uppercase tracking-widest mb-3 opacity-70 text-center`}>
                          Sensación
                        </p>
                        <p
                          className={`font-black ${colors.text} leading-none tracking-tighter text-center`}
                          style={{ fontSize: '3rem' }}
                        >
                          {avgFeelsLike}°
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-center text-lg ${colors.text} mb-6 font-medium`}
                  >
                    {description}
                  </p>

                  {/* Weather Details */}
                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CloudRain className={`w-5 h-5 ${colors.icon}`} />
                        <span className={`text-sm ${colors.text}`}>
                          Lluvia
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        {Math.round(maxPrecipitation)}%
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplets className={`w-5 h-5 ${colors.icon}`} />
                        <span className={`text-sm ${colors.text}`}>
                          Humedad
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        {avgHumidity}%
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wind className={`w-5 h-5 ${colors.icon}`} />
                        <span className={`text-sm ${colors.text}`}>Viento</span>
                      </div>
                      <span className={`text-sm font-semibold ${colors.text}`}>
                        {avgWindSpeed} km/h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
        })()}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .weather-metric-value {
          font-size: 3rem;
        }

        @media (min-width: 768px) {
          .weather-metric-value {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </div>
  );
}
