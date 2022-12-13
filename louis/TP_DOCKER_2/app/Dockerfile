## deploy the app node js

FROM node:18-alpine

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]