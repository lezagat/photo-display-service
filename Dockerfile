FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=prod

EXPOSE 3000
#use express server port here

CMD ["npm", "start"]