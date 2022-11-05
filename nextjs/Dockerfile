# syntax=docker/dockerfile:1
FROM node:latest
RUN node -v && npm -v
WORKDIR /app
COPY . .
RUN npm i --force
CMD ["npm", "run", "dev"]
EXPOSE 3000
