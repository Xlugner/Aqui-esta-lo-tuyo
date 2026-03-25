# Guía de Deployment en Vercel

## 📋 Pre-deployment Checklist

- [ ] Código está limpio y sin errores
- [ ] Build local funciona: `npm run build`
- [ ] Todas las variables de entorno están configuradas
- [ ] Supabase está configurado correctamente
- [ ] Base de datos está lista
- [ ] Tienes cuenta en Vercel (https://vercel.com)
- [ ] Tienes cuenta en GitHub/GitLab/Bitbucket

## 🚀 Paso 1: Preparar el Código

### 1.1 Verificar que todo funciona localmente

```bash
# Instalar dependencias
npm install

# Build
npm run build

# Verificar que no hay errores
npm run preview
```

### 1.2 Commit y push a tu repositorio

```bash
git add .
git commit -m "chore: prepare for production deployment"
git push origin main
```

## 🔐 Paso 2: Configurar Variables de Entorno en Vercel

### 2.1 Ir a Vercel y crear un nuevo proyecto

1. Ve a https://vercel.com/dashboard
2. Click en "Add New..." > "Project"
3. Selecciona tu repositorio (GitHub, GitLab, Bitbucket)
4. Autoriza a Vercel acceder a tu repositorio

### 2.2 Configurar variables de entorno

En la pantalla de configuración del proyecto:

1. Ve a "Environment Variables"
2. Agrega las siguientes variables:

```
PUBLIC_SUPABASE_URL = https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY = your-anon-key-here
PUBLIC_STORE_NAME = Mi Tienda Online
PUBLIC_STORE_DESCRIPTION = Descripción de tu tienda
PUBLIC_STORE_EMAIL = contacto@mitienda.com
PUBLIC_STORE_PHONE = 34123456789
PUBLIC_STORE_LOCATION = Tu ubicación
PUBLIC_WHATSAPP_NUMBER = 34123456789
```

**Importante:** Usa los valores REALES de tu Supabase, no placeholders.

### 2.3 Configurar variables privadas (opcional)

Si necesitas variables privadas en producción:

```
ADMIN_EMAIL = admin@tienda.com
ADMIN_PASSWORD_HASH = your-bcrypt-hash-here
```

## 🎯 Paso 3: Deploy

### 3.1 Opción A: Deploy automático desde Vercel UI

1. En la pantalla de configuración, click en "Deploy"
2. Vercel automáticamente:
   - Clona tu repositorio
   - Instala dependencias
   - Ejecuta `npm run build`
   - Despliega a producción

### 3.2 Opción B: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## ✅ Paso 4: Verificar Deployment

### 4.1 Verificar que el sitio está en línea

1. Ve a tu dashboard de Vercel
2. Verifica que el deployment está "Ready"
3. Click en el URL para visitar tu sitio

### 4.2 Pruebas funcionales

- [ ] Página de inicio carga correctamente
- [ ] Productos se cargan
- [ ] Imágenes se cargan desde Supabase
- [ ] Carrito funciona
- [ ] Admin panel es accesible en `/admin`
- [ ] Login funciona
- [ ] Puedes crear/editar/eliminar productos
- [ ] Notificaciones funcionan

### 4.3 Verificar variables de entorno

En tu navegador, abre la consola (F12) y verifica:

```javascript
// Debería mostrar tu URL de Supabase
console.log(import.meta.env.PUBLIC_SUPABASE_URL)
```

## 🔄 Paso 5: Configurar Deployments Automáticos

Vercel automáticamente despliega cuando haces push a tu rama principal:

1. Cualquier push a `main` → Deploy automático a producción
2. Pull requests → Deploy preview automático

Para cambiar esto:

1. Ve a Project Settings > Git
2. Configura "Production Branch" (por defecto es `main`)

## 🚨 Troubleshooting

### El build falla

**Problema:** Error durante el build

**Solución:**
1. Revisa los logs en Vercel Dashboard > Deployments > Failed
2. Verifica que el build funciona localmente: `npm run build`
3. Verifica que todas las variables de entorno están configuradas

### Las imágenes no cargan

**Problema:** Las imágenes de Supabase no se ven

**Solución:**
1. Verifica que `PUBLIC_SUPABASE_URL` es correcto
2. Verifica que las imágenes existen en Supabase Storage
3. Verifica que RLS permite lectura pública

### Admin panel no funciona

**Problema:** No puedo acceder a `/admin` o login no funciona

**Solución:**
1. Verifica que `PUBLIC_SUPABASE_ANON_KEY` es correcto
2. Verifica que la tabla `admin_users` existe en Supabase
3. Verifica que tienes un usuario admin creado

### Variables de entorno no se aplican

**Problema:** Los cambios en variables de entorno no se reflejan

**Solución:**
1. Redeploy manualmente: Dashboard > Deployments > Click en el último > "Redeploy"
2. O haz un nuevo push a tu repositorio

## 📊 Monitoreo en Producción

### Logs

1. Ve a Vercel Dashboard > Deployments > Tu deployment
2. Click en "Logs" para ver logs en tiempo real

### Errores

1. Ve a Vercel Dashboard > Monitoring
2. Verifica "Error Rate" y "Response Time"

### Analytics

1. Ve a Vercel Dashboard > Analytics
2. Monitorea:
   - Page views
   - Response times
   - Error rates

## 🔄 Actualizaciones Futuras

### Proceso para actualizar en producción

1. Haz cambios localmente
2. Verifica que funciona: `npm run build && npm run preview`
3. Commit y push: `git push origin main`
4. Vercel automáticamente despliega
5. Verifica en producción

### Zero-downtime deployment

Vercel maneja esto automáticamente:
- Construye la nueva versión
- Verifica que funciona
- Cambia el tráfico a la nueva versión
- Mantiene la versión anterior como rollback

## 🔙 Rollback

Si algo sale mal:

1. Ve a Vercel Dashboard > Deployments
2. Encuentra el deployment anterior que funcionaba
3. Click en los 3 puntos > "Promote to Production"

## 📞 Soporte

- Documentación de Vercel: https://vercel.com/docs
- Documentación de Astro: https://docs.astro.build
- Comunidad: https://astro.build/chat

---

**¡Listo! Tu sitio está en producción en Vercel.**

Próximos pasos:
1. Configura un dominio personalizado (opcional)
2. Configura SSL/HTTPS (automático en Vercel)
3. Monitorea el sitio regularmente
4. Realiza backups de tu base de datos
