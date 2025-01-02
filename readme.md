# Boas-vindas ao projeto Nearby App

O projeto **Nearby App** é um aplicativo mobile de clube de benefícios com cupons para utilizar em estabelecimentos próximos a você.

Esse é um projeto do evento **NLW Pocket Mobile**

---

## Overview do Projeto

O **Nearby App** oferece as seguintes funcionalidades principais:

- **Localização**: O aplicativo usa a localização do dispositivo para identificar estabelecimentos próximos a você.
- **Detalhe dos estabelecimentos**: Consulte informações detalhadas de cada loja, como endereço, benefícios e cupons.
- **Leitura de QRCode**: O aplicativo utiliza a câmera do dispositivo para escanear QRCodes, permitindo o resgate de cupons.

![Overview do Projeto](./banner/banner.JPG)

<div align="center">
    <img src="./banner/screenshot.gif" height="500" alt="screenshot gif">
    <p>Obs: A tela branca de fundo foi utilizada apenas para simular a câmera, </br>já que no emulador do iOS não foi possível utilizar a funcionalidade da câmera.</p>
</div>

<video src="./banner/screenshot.webm" width="600" controls autoplay loop>
  Seu navegador não suporta o elemento <code>video</code>.
</video>

---

## Como executar o projeto

Para executar o **Nearby App**, você precisa clonar o repositório, instalar as dependências e rodar tanto a API quanto o projeto mobile.

### **1. Clonando o Repositório**

```bash
# Clone o repositório
git clone https://github.com/Joaovictormartin/nlw-pocket-mobile.git

# Entre na pasta do projeto
cd nlw-pocket-mobile
```

### **2. Configurando e executando a API**

A API foi desenvolvida em **Node.js** com **Prisma**.

```bash
# Entre na pasta da API
cd api

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

A API rodará na porta **3333** (ou conforme configuração).

### **3. Configurando e executando o Mobile**

```bash
# Volte para a raiz do projeto e entre na pasta mobile
cd ../mobile

# Instale as dependências
npm install

# Execute o projeto
npx expo start
```

---

Agora, o projeto **Nearby App** estará rodando localmente! 🚀

Abra o aplicativo utilizando um emulador ou um dispositivo físico com o **Expo Go**.

---

### Tecnologias Utilizadas

- **React Native**
- **TypeScript**
- **Expo**
- **Expo Router**
- **Expo Camera**
- **Expo Location**
- **React Native Maps**
- **React Native Bottom Sheet**
- **React Native Gesture Handler**
- **Design Pattern: Composition**
