FROM node:10
WORKDIR /usr/src/app
COPY package*.json nodemon.json package-lock.json ./
RUN npm i
COPY . .
EXPOSE 9000
CMD [ "npm", "start" ]
