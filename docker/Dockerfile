FROM node:10-alpine
WORKDIR /app
COPY ./package.json /myapp/package.json
COPY ./package-lock.json /myapp/package-lock.json
COPY . .
RUN npm install
RUN npm install -g socket.io nodemon
COPY . .
CMD ["nodemon","nodeServer/index.js"]
EXPOSE 8000

