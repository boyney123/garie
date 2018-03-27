FROM node:8.10.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080


CMD ["npm", "start"]
