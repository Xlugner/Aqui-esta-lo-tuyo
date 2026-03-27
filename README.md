# Ecommerce Frontend con Astro + React + Supabase

Frontend moderno para la tienda online, construido con Astro, React, Tailwind CSS y Supabase.

## 🎨 Características

- 🚀 Renderizado híbrido con Astro (SSR + estático)
- ⚛️ Componentes interactivos con React
- 🎨 Estilos con Tailwind CSS v4
- 🛒 Carrito de compras funcional con estado persistente
- 📱 Diseño totalmente responsive
- ⚡ Optimizado para rendimiento
- 🔐 Autenticación de usuarios con Supabase
- � Panel de administración seguro
- �🗄️ Base de datos PostgreSQL con Supabase
- 🔍 SEO optimizado
- 📤 Subida de imágenes con Supabase Storage

## 🛠️ Requisitos

- Node.js >= 18.0.0
- npm >= 8.0.0
- Proyecto Supabase configurado

## 🚀 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Xlugner/Aqui-esta-lo-tuyo.git
   cd Aqui-esta-lo-tuyo
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
├── components/          # Componentes reutilizables
│   ├── astro/           # Componentes de Astro
│   ├── react/           # Componentes de React
│   └── admin/           # Componentes del panel admin
├── layouts/            # Layouts de la aplicación
├── pages/              # Rutas de la aplicación
│   ├── index.astro     # Página de inicio
│   ├── productos/      # Páginas de productos
│   ├── checkout/       # Página de pago
│   ├── contacto/        # Página de contacto
│   └── admin/          # Panel de administración
├── styles/             # Estilos globales
└── lib/                # Utilidades y configuraciones
```

## 🔧 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Configuración de Supabase
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key

# Configuraciones de la tienda
PUBLIC_STORE_NAME="Mi Tienda Online"
PUBLIC_STORE_DESCRIPTION="Tu tienda online"
PUBLIC_STORE_EMAIL=contacto@mitienda.com
PUBLIC_STORE_PHONE=34123456789
PUBLIC_STORE_LOCATION="Tu ciudad"
PUBLIC_WHATSAPP_NUMBER=34123456789

# Credenciales admin (solo para desarrollo)
ADMIN_EMAIL=admin@mitienda.com
ADMIN_PASSWORD=tu-contraseña
```

## 🚀 Comandos útiles

| Comando           | Acción                                      |
|-------------------|--------------------------------------------|
| `npm install`     | Instalar dependencias                      |
| `npm run dev`     | Iniciar servidor de desarrollo             |
| `npm run build`   | Construir para producción                 |
| `npm run preview` | Vista previa de la compilación            |

## 🛠️ Tecnologías utilizadas

- [Astro](https://astro.build/) - Framework web v6
- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario v18
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario v4
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Supabase](https://supabase.com/) - Backend as a Service con PostgreSQL
- [Netlify](https://www.netlify.com/) - Plataforma de despliegue

## 🌐 Despliegue

### Netlify (Recomendado)

1. Ve a [Netlify](https://app.netlify.com)
2. Conecta tu repositorio de GitHub
3. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Agrega las variables de entorno en Site settings → Environment variables

### Variables de entorno en producción

En Netlify, configura estas variables:
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY` 
- `SUPABASE_SERVICE_ROLE_KEY`
- `PUBLIC_STORE_NAME`
- `PUBLIC_STORE_DESCRIPTION`
- `PUBLIC_STORE_EMAIL`
- `PUBLIC_STORE_PHONE`
- `PUBLIC_STORE_LOCATION`
- `PUBLIC_WHATSAPP_NUMBER`

## 🗄️ Base de datos Supabase

El proyecto requiere estas tablas en Supabase:

### Tablas principales
- `products` - Productos
- `categories` - Categorías
- `product_images` - Imágenes de productos
- `hero_images` - Imágenes del banner principal
- `store_config` - Configuración de la tienda

### Autenticación
- Configurar email/password en Authentication → Settings
- Habilitar confirmación de email si es necesario

## � Estructura actualizada

```
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── astro/      # Componentes estáticos
    │   │   ├── react/      # Componentes interactivos
    │   │   └── admin/      # Panel administración
    │   ├── layouts/        # Layouts principales
    │   ├── pages/          # Rutas y páginas
    │   │   ├── admin/      # Panel admin
    │   │   ├── productos/  # Detalles de productos
    │   │   └── ...
    │   ├── lib/            # Utilidades (cliente Supabase, tipos)
    │   ├── styles/         # Estilos globales
    │   └── env.d.ts        # Tipos de variables de entorno
    ├── public/             # Assets estáticos
    ├── astro.config.mjs    # Configuración de Astro
    └── package.json       # Dependencias
```

## �️ Panel de Administración

Acceso seguro a través de `/admin/login` con:
- Gestión de productos
- Gestión de categorías  
- Configuración de banners
- Configuración de la tienda
- Subida de imágenes

## 📝 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 👤 Autor

Creado por Xlugner

---

**¡Contribuciones bienvenidas!** Si encuentras un bug o tienes una mejora, no dudes en abrir un issue o pull request.
