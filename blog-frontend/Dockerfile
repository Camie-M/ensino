FROM node:18-alpine

WORKDIR /app

# Copiar package.json e package-lock.json (se houver) primeiro para otimizar o cache do Docker
COPY package.json package-lock.json .

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta 3000 para o React
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
