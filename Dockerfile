FROM node:alpine
WORKDIR /user/src/app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
#CMD ["npm", "start"]