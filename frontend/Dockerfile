FROM node:alpine3.16
WORKDIR /usr/code
COPY . .
RUN npm install && \
    npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
