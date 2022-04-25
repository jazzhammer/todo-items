# syntax=docker/dockerfile:1
FROM mongo-express
ENV NODE_ENV=production

MAINTAINER jazzhammer <live@jazzhammer.com>
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
COPY install ./
RUN npm install --production
COPY . .
EXPOSE 3001

CMD ["npm", "run", "install"]
CMD ["npm", "run", "startdb"]
CMD ["npm", "start"]

