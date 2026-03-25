# Guía de Seguridad para Producción

## Variables de Entorno Sensibles

Este proyecto utiliza variables de entorno para almacenar credenciales. Es importante entender cuáles son públicas y cuáles privadas.

### Variables Públicas vs Privadas

**Variables PÚBLICAS** (prefijo `PUBLIC_`):
- Se envían al cliente (visible en el navegador)
- Necesarias para que el frontend funcione
- Ejemplos: URLs de Supabase, claves públicas de APIs
- ✅ Seguro incluirlas en `.env` local
- ✅ Seguro incluirlas en variables de entorno de producción

**Variables PRIVADAS** (sin prefijo `PUBLIC_`):
- Solo se usan en el servidor
- Nunca se envían al cliente
- Ejemplos: contraseñas, API keys privadas
- ⚠️ Incluir en `.env` local solo si es necesario
- ✅ Configurar en variables de entorno de producción

### Variables Requeridas en Desarrollo Local

```bash
# Supabase (PÚBLICO - necesario para el frontend)
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Tienda (PÚBLICO - necesario para el frontend)
PUBLIC_STORE_NAME=Mi Tienda Online
PUBLIC_STORE_EMAIL=contacto@mitienda.com
PUBLIC_WHATSAPP_NUMBER=34123456789
```

### Variables Requeridas en Producción

En tu plataforma de hosting (Vercel, Netlify, Railway, etc.), configura:

```bash
# Todas las variables PUBLIC_* (igual que en desarrollo)
PUBLIC_SUPABASE_URL=...
PUBLIC_SUPABASE_ANON_KEY=...
PUBLIC_STORE_NAME=...
PUBLIC_STORE_EMAIL=...
PUBLIC_WHATSAPP_NUMBER=...

# Variables privadas (solo en producción)
ADMIN_EMAIL=admin@tienda.com
ADMIN_PASSWORD_HASH=your-bcrypt-hash-here
```

### Cómo Generar un Hash de Contraseña Seguro

1. Usa bcrypt online: https://bcrypt.online/
2. O en Node.js:
```javascript
const bcrypt = require('bcrypt');
const password = 'tu-contraseña-segura';
const hash = bcrypt.hashSync(password, 10);
console.log(hash);
```

## Configuración en Producción

### 1. Supabase

- Crea un proyecto en https://supabase.com
- Obtén las claves de API desde Settings > API
- Usa la `anon key` para `PUBLIC_SUPABASE_ANON_KEY`
- Configura RLS (Row Level Security) en todas las tablas

### 2. Variables de Entorno

En tu plataforma de hosting (Vercel, Netlify, Railway, etc.):

1. Ve a Settings > Environment Variables
2. Agrega todas las variables del archivo `.env.example`
3. Usa valores seguros y únicos para producción

### 3. Seguridad de Base de Datos

- Habilita RLS en Supabase
- Configura políticas de acceso restrictivas
- Usa roles de Supabase para diferentes niveles de acceso
- Realiza backups regulares

### 4. HTTPS

- Asegúrate de que tu sitio use HTTPS
- Configura HSTS (HTTP Strict Transport Security)
- Usa certificados SSL válidos

### 5. Rate Limiting

- Implementa rate limiting en tu servidor
- Protege endpoints de login contra ataques de fuerza bruta
- Usa Cloudflare o similar para DDoS protection

### 6. Cookies Seguras

Las cookies de sesión están configuradas con:
- `httpOnly: true` - No accesible desde JavaScript
- `secure: true` - Solo se envían por HTTPS en producción
- `sameSite: 'lax'` - Protección contra CSRF

### 7. Auditoría y Monitoreo

- Monitorea logs de acceso
- Registra cambios en el admin panel
- Configura alertas para actividades sospechosas

## Checklist de Seguridad Antes de Producción

- [ ] Todas las credenciales están en variables de entorno
- [ ] `.env` no está en el repositorio (verificar `.gitignore`)
- [ ] HTTPS está habilitado
- [ ] RLS está configurado en Supabase
- [ ] Contraseña de admin es fuerte y hasheada
- [ ] Backups automáticos están configurados
- [ ] Rate limiting está implementado
- [ ] Logs están siendo monitoreados
- [ ] Certificados SSL son válidos

## Respuesta a Incidentes

Si sospechas que las credenciales han sido comprometidas:

1. **Inmediatamente:**
   - Regenera las claves de Supabase
   - Cambia la contraseña de admin
   - Revisa los logs de acceso

2. **Dentro de 24 horas:**
   - Audita todos los cambios recientes
   - Verifica integridad de datos
   - Notifica a usuarios si es necesario

3. **Seguimiento:**
   - Implementa autenticación de dos factores
   - Aumenta monitoreo
   - Revisa políticas de seguridad

## Referencias

- [Supabase Security](https://supabase.com/docs/guides/auth)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
