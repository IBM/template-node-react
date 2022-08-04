FROM registry.redhat.io/rhel9/nodejs-16:1-44 AS builder

WORKDIR /opt/app-root/src

RUN mkdir client
COPY --chown=default:root client client
COPY client/package*.json client/
COPY package*.json ./
RUN npm ci

WORKDIR /opt/app-root/src/client 

RUN npm ci && npm run build

FROM registry.redhat.io/rhel9/nodejs-16:1-44

WORKDIR /opt/app-root/src
COPY --from=builder /opt/app-root/src/client/build client/build
COPY public public
COPY server server
COPY client/package*.json client/
COPY package.json .
RUN npm install --production

ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp



## Uncomment the below line to update image security content if any
# USER root
# RUN dnf -y update-minimal --security --sec-severity=Important --sec-severity=Critical && dnf clean all 

COPY ./licenses /licenses

USER default

LABEL name="ibm/template-node-react" \
      vendor="IBM" \
      version="1" \
      release="77.1618436962" \
      summary="This is an example of a container image." \
      description="This container image will deploy a React Node App"

CMD ["npm", "start"]
