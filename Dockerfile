FROM node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE $PORT

CMD [ "node", "index.js" ]