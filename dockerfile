# Crea una imagen a partir de Node.js
# Versión Long Term Support - Slim
FROM node:lts-slim

# Crea y cambiamo sel directorio /app
WORKDIR /app/

# Copia el contenido del proyecto a /app
COPY ./package*.json /app/

# Instala las dependencias de node
RUN npm install

COPY . /app/

# Exponer el puerto 80
EXPOSE 80

# Iniciar el servidor de node
CMD ["npm", "start"]