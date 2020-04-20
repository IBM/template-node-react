FROM registry.access.redhat.com/ubi8/nodejs-12:1-36 AS builder

WORKDIR /opt/app-root/src

RUN mkdir client
COPY --chown=default:root client client
COPY client/package*.json client/
COPY package*.json ./
RUN npm ci
RUN cd client && npm ci

RUN npm run build

# Remove mysql file that cause the Configuration security issue on the audit cloud
RUN rm -r /etc/mysql/

FROM registry.access.redhat.com/ubi8/nodejs-12:1-36

COPY --from=builder /opt/app-root/src/client/build client/build
COPY public public
COPY server server
COPY client/package*.json client/
COPY package.json .
RUN npm install --production

# Remove mysql file that cause the Configuration security issue on the audit cloud
RUN rm -r /etc/mysql/

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD ["npm", "start"]

