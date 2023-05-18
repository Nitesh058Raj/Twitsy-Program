FROM node:alpine3.16
WORKDIR /usr/code
COPY . .
RUN npm install && \
    npm install -g serve && \
    npm run build
EXPOSE 3000
CMD ["serve", "-s", "build"]
