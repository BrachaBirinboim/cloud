FROM node:22-slim

WORKDIR /REACTPROJECT

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]