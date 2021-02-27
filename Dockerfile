FROM registry.access.redhat.com/ubi8/nodejs-12:1-52 AS builder

WORKDIR /opt/app-root/src

RUN mkdir client
COPY --chown=default:root client client
COPY client/package*.json client/
COPY package*.json ./
RUN npm ci

WORKDIR /opt/app-root/src/client 

RUN npm ci && npm run build

FROM registry.access.redhat.com/ubi8/nodejs-12:1-52

COPY --from=builder /opt/app-root/src/client/build client/build
COPY public public
COPY server server
COPY client/package*.json client/
COPY package.json .
RUN npm install --production

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]

