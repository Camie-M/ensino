# Use a imagem Node.js oficial como base
FROM node:20-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos de manifesto para otimizar o cache de camadas
COPY package.json package-lock.json ./

# Instale as dependências (incluindo as de desenvolvimento)
RUN npm install

# Instale ts-node globalmente
RUN npm install -g ts-node

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta que o aplicativo usa
EXPOSE 3001

# Comando para iniciar o aplicativo
CMD ["ts-node", "src/server.ts"]
