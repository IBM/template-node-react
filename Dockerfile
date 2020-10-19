FROM registry.access.redhat.com/ubi8/nodejs-12:1-52 AS builder

WORKDIR /opt/app-root/src

RUN npm ci


RUN npm run build

FROM registry.access.redhat.com/ubi8/nodejs-12:1-52


RUN npm install --production

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]

