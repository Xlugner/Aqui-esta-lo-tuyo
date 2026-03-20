# Guía de Deployment a Producción

## Plataformas Recomendadas

### 1. Vercel (Recomendado para Astro)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Con variables de entorno
vercel env add PUBLIC_SUPABASE_URL
vercel env add PUBLIC_SUPABASE_ANON_KEY
vercel env add ADMIN_EMAIL
vercel env add ADMIN_PASSWORD_HASH
```

### 2. Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Configurar variables en Netlify UI:
# Site settings > Build & deploy > Environment
```

### 3. Railway

```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login y deploy
railway login
railway up
```

### 4. Docker (Para cualquier servidor)

```bash
# Build
docker build -t tienda-online .

# Run
docker run -p 3000:3000 \
  -e PUBLIC_SUPABASE_URL=... \
  -e PUBLIC_SUPABASE_ANON_KEY=... \
  -e ADMIN_EMAIL=... \
  -e ADMIN_PASSWORD_HASH=... \
  tienda-online
```

## Pre-deployment Checklist

### Código
- [ ] Todos los tests pasan
- [ ] No hay console.log() en producción
- [ ] No hay credenciales hardcodeadas
- [ ] Build completa sin errores: `npm run build`

### Configuración
- [ ] `.env` está configurado correctamente
- [ ] Variables de entorno están en la plataforma
- [ ] Base de datos está lista
- [ ] Backups están configurados

### Seguridad
- [ ] HTTPS está habilitado
- [ ] RLS está configurado en Supabase
- [ ] Rate limiting está activo
- [ ] Cookies están configuradas como seguras

### Performance
- [ ] Imágenes están optimizadas
- [ ] Cache está configurado
- [ ] CDN está activo (si aplica)

## Pasos de Deployment

### 1. Preparar el Código

```bash
# Actualizar dependencias
npm install

# Build local
npm run build

# Verificar que no hay errores
npm run preview
```

### 2. Configurar Variables de Entorno

En tu plataforma de hosting, agrega:

```
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ADMIN_EMAIL=admin@tienda.com
ADMIN_PASSWORD_HASH=your-bcrypt-hash
```

### 3. Deploy

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod
```

**Railway:**
```bash
railway up
```

### 4. Verificar Deployment

- [ ] Sitio carga correctamente
- [ ] Admin panel es accesible
- [ ] Login funciona
- [ ] Productos se cargan
- [ ] Carrito funciona
- [ ] Imágenes se cargan

### 5. Monitoreo Post-deployment

- Monitorea logs de errores
- Verifica performance
- Prueba todas las funcionalidades
- Revisa analytics

## Rollback en Caso de Error

### Vercel
```bash
vercel rollback
```

### Netlify
```bash
netlify deploy --prod --alias=rollback
```

### Docker
```bash
docker run -p 3000:3000 previous-image-id
```

## Actualizaciones Futuras

### Proceso de Update

1. Hacer cambios localmente
2. Testear: `npm run build && npm run preview`
3. Commit y push a main
4. Deploy automático (si está configurado)
5. Verificar en producción

### Zero-downtime Deployment

- Vercel y Netlify lo hacen automáticamente
- Para Docker, usa load balancer con múltiples instancias

## Monitoreo en Producción

### Logs
- Vercel: Dashboard > Logs
- Netlify: Site settings > Logs
- Railway: Dashboard > Logs

### Errores
- Configura alertas en Sentry o similar
- Monitorea logs de Supabase

### Performance
- Usa Lighthouse CI
- Monitorea Core Web Vitals
- Revisa analytics

## Troubleshooting

### Sitio no carga
1. Verifica variables de entorno
2. Revisa logs de build
3. Verifica conexión a Supabase

### Admin panel no funciona
1. Verifica credenciales de Supabase
2. Revisa RLS policies
3. Verifica cookies en navegador

### Imágenes no cargan
1. Verifica URLs de Supabase Storage
2. Revisa permisos de Storage
3. Verifica CORS

## Soporte

- Documentación de Astro: https://docs.astro.build
- Documentación de Supabase: https://supabase.com/docs
- Comunidad: https://astro.build/chat
