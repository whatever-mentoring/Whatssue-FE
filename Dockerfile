FROM node:18.16-alpine
WORKDIR /app/frontend

COPY package*.json ./app/frontend
RUN yarn install

COPY . .

EXPOSE 3000
CMD ["npm", "start"] 