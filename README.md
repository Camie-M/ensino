# Ensino

> Ensino é um projeto criado para a graduação de PósTech da FIAP. Ele consiste de rotas de API em NodeJS que gerenciam um blog escolar e inclui criação, edição, exclusão e leitura de posts e usuários. 

## 📌 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do [NodeJS](https://nodejs.org/pt)
- Você tem uma máquina `<Windows / Linux / Mac>`
- Você instalou o [Docker](https://www.docker.com/)
- Para propósito de testes, é interessante que tenha o [Postman](https://www.postman.com/) instalado
- Insira o arquivo .env na raiz do projeto "BlogEnsino"

##📥 Instalando

##⚙️ Preparando a API
Para prepara a API, siga estas etapas:

1. Primeiramente, clone esse repositório:

```bash
git clone https://github.com/Camie-M/ensino.git
```

2. Abra o projeto no seu terminal e abra a pasta correta:

```bash
cd BlogEnsino
```

3. Rode o docker-compose para instalar as dependências necessárias:

```bash
docker-compose up --build
```
📱 Preparando o APP
Para rodar o aplicativo mobile do projeto, siga os passos abaixo:

Certifique-se de ter o Expo CLI instalado
Se ainda não tiver o Expo instalado globalmente, execute o seguinte comando no terminal:

```bash
npm install -g expo-cli
```
No terminal, entre no diretório do aplicativo:

```bash
cd BlogEnsino-App
```
Instale as dependências Executando o seguinte comando:

```bash
npm install
```
Com as dependências instaladas, inicie o Expo com o comando:

```bash
npm start
```
Execute no dispositivo ou emulador
No celular físico: 
 - Instale o app Expo Go (Android | iOS) e escaneie o QR Code que aparece no terminal ou na interface web do Expo.

No emulador: 
 - Se estiver usando um emulador Android com o Android Studio ou um simulador iOS no macOS, clique em "Run on Android device/emulator" ou "Run on iOS simulator".
   
 **Adicione o seu IP que for exibido ao rodar o projeto na etapa anterior na pasta app.json para que as chamadas sejam baseadas no seu localhost**

🔗 Rotas disponíveis

Com o projeto rodando, é possível testá-lo pelo [Postman](https://www.postman.com/) ou ferramentas similares na URL <http://localhost:3001/>

As rotas atualmente disponibilizadas são:
- Criar post: </posts> (POST)
- Listar todos os posts: </posts> (GET)
- Pesquisa de posts: </posts/search> (GET)
- Pegar um post pelo id: </posts/:id> (GET)
- Editar post: </posts/:id> (PUT)
- Deletar post: </posts/:id> (DELETE)
  
- Criar user: </users> (POST)
- Listar todos os users: </users> (GET)
- Pegar um user pelo id: </users/:id> (GET)
- Editar user: </users/:id> (PUT)
- Deletar user: </users/:id> (DELETE)

- Gerar token JWT: </token> (POST)

Para saber mais detalhes sobre os <headers> e os <body> necessários para as rotas em questão, visita a documentação da API.
