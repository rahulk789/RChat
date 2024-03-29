FROM node:10-alpine
WORKDIR /app
COPY ./package.json /myapp/package.json
COPY ./package-lock.json /myapp/package-lock.json
COPY . .
RUN npm install
RUN npm install -g express nodemon
COPY . .
CMD ["nodemon","server-index.js"]
EXPOSE 4099

