# Configuración del Módulo del Tiempo

El módulo del tiempo muestra información meteorológica actualizada para Madrid el 20 de diciembre de 2025.

## 📋 Características

- ☀️ Pronóstico por horas para el día de la boda
- 🔄 Actualización automática cada 30 minutos
- 🌡️ Temperatura actual y sensación térmica
- 💧 Humedad relativa
- 💨 Velocidad del viento
- 🌧️ Probabilidad de precipitación
- 📊 Datos de fuente oficial (OpenWeatherMap)

## 🔑 Configuración de la API Key

### Paso 1: Obtener tu API Key gratuita

1. Ve a [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
2. Crea una cuenta gratuita
3. Verifica tu correo electrónico
4. Accede a [API Keys](https://home.openweathermap.org/api_keys)
5. Copia tu API key

### Paso 2: Configurar la variable de entorno

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Abre el archivo `.env` y reemplaza `tu_api_key_aqui` con tu API key:
   ```
   PUBLIC_OPENWEATHER_API_KEY=tu_api_key_real_aqui
   ```

3. Guarda el archivo

### Paso 3: Reiniciar el servidor de desarrollo

```bash
npm run dev
```

## ⚠️ Notas Importantes

- **Seguridad**: El archivo `.env` está incluido en `.gitignore` para proteger tu API key. ¡No lo compartas públicamente!
- **API Gratuita**: La cuenta gratuita de OpenWeatherMap permite hasta 1,000 llamadas por día, más que suficiente para este uso.
- **Pronóstico**: OpenWeatherMap proporciona pronósticos de hasta 5 días. El pronóstico específico del 20 de diciembre se mostrará cuando esté disponible.
- **Actualización Automática**: El widget se actualiza cada 30 minutos automáticamente sin necesidad de recargar la página.

## 🌐 Despliegue en Producción

Si usas Netlify, Vercel u otro servicio de hosting:

1. Ve a la configuración de variables de entorno de tu plataforma
2. Añade la variable: `PUBLIC_OPENWEATHER_API_KEY` con tu API key como valor
3. Redespliega tu sitio

### Ejemplo para Netlify:
- Site settings → Environment variables → Add a variable
- Key: `PUBLIC_OPENWEATHER_API_KEY`
- Value: tu_api_key

### Ejemplo para Vercel:
- Settings → Environment Variables → Add
- Key: `PUBLIC_OPENWEATHER_API_KEY`
- Value: tu_api_key

## 🎨 Personalización

El componente está en `src/components/WeatherWidget.jsx` y puedes personalizar:

- Colores y estilos (usando Tailwind CSS)
- Frecuencia de actualización (actualmente 30 minutos)
- Información mostrada (temperatura, viento, humedad, etc.)
- Iconos del clima

## 📞 Solución de Problemas

### El widget muestra "API key no configurada"
- Verifica que hayas creado el archivo `.env`
- Asegúrate de que la variable se llame exactamente `PUBLIC_OPENWEATHER_API_KEY`
- Reinicia el servidor de desarrollo

### El widget muestra "Error en la API"
- Verifica que tu API key sea correcta
- Comprueba que tu cuenta de OpenWeatherMap esté activada (puede tardar unos minutos después del registro)
- Revisa que no hayas excedido el límite de llamadas gratuitas

### No veo el pronóstico del 20 de diciembre
- Es normal si falta mucho tiempo. El pronóstico de 5 días se actualiza conforme se acerca la fecha.
- El widget mostrará automáticamente el pronóstico correcto cuando esté disponible.

## 📚 Documentación Adicional

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [Astro Environment Variables](https://docs.astro.build/en/guides/environment-variables/)
