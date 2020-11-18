FROM node:14-alpine
ARG PORT=3000
WORKDIR /app
COPY package*.json /app
RUN npm ci
COPY src /app/src
ENV PORT=${PORT}
EXPOSE $PORT
CMD [ "node", "src/index.js" ]