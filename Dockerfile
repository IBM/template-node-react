FROM registry.access.redhat.com/ubi8/nodejs-10

RUN mkdir app

# Install npm production packages
COPY --chown=default:root . ./app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000/tcp

WORKDIR ./app

RUN npm install --production

CMD ["npm", "start"]
