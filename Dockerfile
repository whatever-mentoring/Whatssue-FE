FROM node:18.16-alpine
WORKDIR /app/frontend
COPY package.json package-lock.json ./
RUN npm install 
RUN npm run build 
EXPOSE 3000
CMD ["npm", "start"] 