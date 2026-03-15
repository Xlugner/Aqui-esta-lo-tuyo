# Ecommerce Frontend con Astro + React + Supabase

Frontend moderno para la tienda online, construido con Astro, React, Tailwind CSS y Supabase.

## 🎨 Características

- 🚀 Renderizado estático con Astro para máximo rendimiento
- ⚛️ Componentes interactivos con React
- 🎨 Estilos con Tailwind CSS
- 🛒 Carrito de compras funcional
- 📱 Diseño totalmente responsive
- ⚡ Optimizado para rendimiento
- 🔐 Autenticación con Supabase
- 🗄️ Base de datos PostgreSQL con Supabase
- 🔍 SEO optimizado

## 🛠️ Requisitos

- Node.js >= 18.0.0
- npm >= 8.0.0
- Proyecto Supabase configurado

## 🚀 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tienda-online-frontend.git
   cd tienda-online-frontend
   ```


2. Instalar dependencias:
   ```bash
   npm install
   ```


3. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   ```

   Editar el archivo `.env` con tus configuraciones

4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```


La aplicación estará disponible en: [http://localhost:4321](http://localhost:4321)

## 🏗️ Estructura del proyecto

```text
src/
├── components/     # Componentes reutilizables
│   ├── astro/     # Componentes de Astro
│   └── react/     # Componentes de React
├── layouts/       # Layouts de la aplicación
├── pages/         # Rutas de la aplicación
│   ├── index.astro # Página de inicio
│   ├── productos/ # Páginas de productos
│   ├── carrito/   # Página del carrito
│   └── cuenta/    # Páginas de autenticación
├── styles/        # Estilos globales
└── lib/           # Utilidades y configuraciones
```


## 🔧 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Configuración de Supabase
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-anon-key

# Configuraciones de la tienda
SITE_NAME="Mi Tienda Online"
DEFAULT_LANGUAGE=es
PUBLIC_STORE_EMAIL=contacto@mitienda.com
PUBLIC_STORE_PHONE=34123456789
PUBLIC_WHATSAPP_NUMBER=34123456789
```

## 🚀 Comandos útiles

| Comando           | Acción                                      |
|-------------------|--------------------------------------------|
| `npm install`     | Instalar dependencias                      |
| `npm run dev`     | Iniciar servidor de desarrollo             |
| `npm run build`   | Construir para producción                 |
| `npm run preview` | Vista previa de la compilación            |
| `npm run format`  | Formatear código                          |

## 🛠️ Tecnologías utilizadas

- [Astro](https://astro.build/) - Framework web para sitios estáticos rápidos
- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Supabase](https://supabase.com/) - Backend as a Service con PostgreSQL

## 🌐 Despliegue

Puedes desplegar en:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Cualquier servicio que soporte sitios estáticos

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## ✉️ Contacto

Tu Nombre - [@tuusuario](https://t.me/Rzoux) - email@ejemplo.com

Enlace al proyecto: [Repositorio Frontend](https://github.com/tu-usuario/tienda-online-frontend)

## 📁 Estructura del Proyecto

```
├── backend/
│   ├── config/          # Configuración de Strapi
│   ├── database/        # Migraciones
│   ├── public/          # Archivos públicos (uploads)
│   ├── src/
│   │   ├── admin/       # Admin panel
│   │   ├── api/         # Endpoints de API
│   │   │   ├── category/
│   │   │   ├── product/
│   │   │   └── store-config/
│   │   └── extensions/  # Extensiones personalizadas
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/  # Componentes Astro y React
    │   ├── layouts/     # Layouts principales
    │   ├── pages/       # Rutas y páginas
    │   ├── lib/         # Utilidades (cliente Strapi, tipos)
    │   └── styles/      # Estilos globales
    ├── public/          # Assets estáticos
    ├── astro.config.mjs
    └── package.json
```

## 🔧 Configuración

### Frontend (.env)

```env
PUBLIC_STRAPI_URL=http://localhost:1337
PUBLIC_WHATSAPP_NUMBER=34123456789
PUBLIC_STORE_NAME=Mi Tienda Online
PUBLIC_STORE_DESCRIPTION=Descripción de tu tienda
PUBLIC_STORE_EMAIL=contacto@mitienda.com
```

## 📚 Stack Tecnológico

### Backend

- Strapi v5
- SQLite (por defecto)
- Node.js

### Frontend

- Astro v5
- React v18
- Tailwind CSS v3
- TypeScript v5

## 🛠️ Scripts útiles

### Backend

- `npm run develop` - Inicia modo desarrollo
- `npm run build` - Compila para producción
- `npm run start` - Inicia servidor en producción

### Frontend

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Vista previa de producción

## 📝 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 👤 Autor

Creado por Xlugner

---

**¡Contribuciones bienvenidas!** Si encuentras un bug o tienes una mejora, no dudes en abrir un issue o pull request.
