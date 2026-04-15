# Etapa 1: Construcción (Build)
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci

# Copiar todo el código fuente
COPY . .

# Construir el proyecto Astro
RUN npm run build

# Etapa 2: Producción (Runtime)
FROM node:18-alpine

WORKDIR /app

# Copiar solo lo necesario del build anterior
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.mjs ./
COPY --from=builder /app/package.json ./

# Instalar dependencias de producción solamente
RUN npm ci --only=production

# Exponer puerto (Render y otros hosting asignan $PORT dinámicamente)
EXPOSE 3000

# Comando para ejecutar la app en producción
CMD ["node", "server.mjs"]