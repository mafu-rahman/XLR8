FROM node:alpine3.18
LABEL authors="nadimac"

WORKDIR /app

COPY . .

RUN npm install
EXPOSE 5473

CMD ["npm", "run", "dev"]