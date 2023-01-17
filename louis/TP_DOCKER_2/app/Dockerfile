## deploy the app node js

FROM node:18-alpine

# variables d'environnement
ENV PORT 3000

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

RUN npm install --omit=dev

EXPOSE ${PORT}

CMD [ "npm", "start" ]