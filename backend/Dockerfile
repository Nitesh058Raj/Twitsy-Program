FROM node:alpine3.11
WORKDIR /usr/code
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start:prod"]

