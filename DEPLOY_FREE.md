# Guía de Deploy Gratuito

Este proyecto ya está configurado para funcionar en las siguientes plataformas **100% GRATIS**.

---

## 🥇 Opción 1: Koyeb (Recomendado)

**Ventajas:**
- ✅ 1 servicio gratis de por vida
- ✅ Soporte Docker nativo
- ✅ No se duerme (siempre activo)
- ✅ HTTPS automático
- ✅ Variables de entorno fáciles

**Pasos:**

1. Ve a [koyeb.com](https://app.koyeb.com) y crea cuenta gratis
2. Click en **"Create Service"**
3. Selecciona **"Docker"** como método de deploy
4. Conecta tu repositorio de GitHub o sube el Dockerfile
5. Configura las variables de entorno:
   ```
   PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
   PUBLIC_STORE_NAME="Tu Tienda"
   PUBLIC_WHATSAPP_NUMBER=34123456789
   # ... todas las de .env.example
   ```
6. Click en **Deploy**

**Importante:** Koyeb asigna el puerto automáticamente. Tu app ya usa `process.env.PORT`.

---

## 🥈 Opción 2: Google Cloud Run

**Ventajas:**
- ✅ 2 millones de requests/mes gratis
- ✅ Soporte Docker
- ✅ Infraestructura de Google
- ✅ Escala a cero (no pagas si no hay tráfico)

**Desventajas:**
- ⚠️ Primer request lento (cold start ~5-10s)
- ⚠️ Requiere cuenta con tarjeta (no cobra)

**Pasos:**

1. Crea cuenta en [Google Cloud](https://console.cloud.google.com)
2. Habilita **Cloud Run** y **Cloud Build**
3. Sube tu imagen Docker:
   ```bash
   gcloud builds submit --tag gcr.io/TU_PROYECTO/aqui-esta-lo-tuyo
   ```
4. Deploy en Cloud Run:
   ```bash
   gcloud run deploy aqui-esta-lo-tuyo \
     --image gcr.io/TU_PROYECTO/aqui-esta-lo-tuyo \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --set-env-vars PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co,PUBLIC_SUPABASE_ANON_KEY=tu-key
   ```

---

## 🥉 Opción 3: Railway (Trial)

**Ventajas:**
- ✅ $5 de crédito gratis al mes (suficiente para proyectos pequeños)
- ✅ Muy fácil de usar
- ✅ Soporte Docker

**Pasos:**

1. Ve a [railway.app](https://railway.app)
2. Conecta tu GitHub
3. Crea nuevo proyecto → **"Deploy from GitHub repo"**
4. Configura variables de entorno en el dashboard
5. Deploy

**Nota:** Railway cambió su modelo. Ahora da $5 de crédito mensual que se renueva. Si tu app consume poco, es gratis.

---

## 🏅 Opción 4: Oracle Cloud Free Tier

**Ventajas:**
- ✅ VPS completo GRATIS de por vida
- ✅ 4 CPUs ARM, 24GB RAM (muy generoso)
- ✅ 200GB de almacenamiento
- ✅ No se duerme nunca

**Desventajas:**
- ⚠️ Requiere tarjeta para verificar (no cobra)
- ⚠️ Configuración manual (es un VPS)

**Pasos:**

1. Regístrate en [Oracle Cloud Free Tier](https://www.oracle.com/cloud/free/)
2. Crea una instancia **Always Free** (ARM)
3. Instala Node.js y Docker en la máquina
4. Sube tu proyecto y corre con Docker Compose

---

## 🔧 Variables de Entorno Requeridas

En cualquier plataforma que elijas, necesitas configurar estas variables:

```env
# Supabase (OBLIGATORIO)
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-anon-key

# Tienda
PUBLIC_STORE_NAME="Tu Tienda Online"
PUBLIC_STORE_DESCRIPTION="Descripción de tu tienda"
PUBLIC_STORE_EMAIL=contacto@mitienda.com
PUBLIC_STORE_PHONE=34123456789
PUBLIC_STORE_LOCATION="Tu ciudad"
PUBLIC_WHATSAPP_NUMBER=34123456789
```

---

## 🚀 Cómo Funciona el Deploy

Tu proyecto usa:
- **Docker** para empaquetar la app
- **Node.js** como runtime (Astro SSR)
- **Puerto dinámico** (`process.env.PORT`) para compatibilidad con cualquier hosting

Los archivos ya corregidos:
- ✅ `Dockerfile` → Usa `node server.mjs` (producción correcta)
- ✅ `astro.config.mjs` → Usa `process.env.PORT`
- ✅ `docker-compose.yml` → Pasa todas las variables de entorno
- ✅ `admin-auth.ts` → Cookies configuradas para producción

---

## 🐛 Si Algo Falla

1. **Dashboard no abre:** Revisa que las variables de Supabase estén correctas
2. **Cookies no funcionan:** Asegúrate que tu hosting use HTTPS
3. **Puerto incorrecto:** Verifica que la plataforma asigne `$PORT` automáticamente
4. **Logs:** Revisa los logs del hosting para ver errores específicos

---

## 💡 Recomendación Final

**Para tu caso (tienda pequeña sin presupuesto):**

1. **Primero:** Prueba con **Koyeb** - es el más fácil y no se duerme
2. **Segundo:** Si necesitas más potencia, **Oracle Cloud** es el más generoso gratis
3. **Tercero:** **Google Cloud Run** si no te importa el cold start

**NO uses:**
- ❌ Vercel (requiere cambiar a serverless, reescribir código)
- ❌ Netlify (mismo problema que Vercel para SSR)
- ❌ GitHub Pages (solo soporta estático, no SSR)

---

## 📞 Soporte

Si tienes problemas con el deploy:
1. Revisa los logs de la plataforma
2. Verifica variables de entorno
3. Asegúrate que el puerto sea el correcto (`process.env.PORT`)
