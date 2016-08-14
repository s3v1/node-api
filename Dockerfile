#https://github.com/mhart/alpine-node
#https://github.com/gliderlabs/docker-alpine
FROM mhart/alpine-node:4

RUN npm install -g forever

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

CMD forever -a -l service.log -o out.log -e err.log server.js