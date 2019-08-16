FROM registry.access.redhat.com/ubi8/nodejs-10

RUN mkdir app

# Install npm production packages
COPY package.json ./app
RUN cd ./app; npm install --production

COPY . ./app

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000/tcp

WORKDIR ./app

CMD ["npm", "start"]



