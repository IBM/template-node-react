FROM registry.access.redhat.com/ubi8/nodejs-12:1-52 AS builder

WORKDIR /opt/app-root/src

COPY --chown=default:root . .
RUN npm ci
RUN npm run build

FROM registry.access.redhat.com/ubi8/nodejs-12:1-52
COPY --from=builder /opt/app-root/src/build build
COPY public public
COPY server server
COPY package.json .

RUN npm install --production

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]

