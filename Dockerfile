FROM mhart/alpine-node:10 as build

WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build && yarn --production

FROM keymetrics/pm2:10-alpine

WORKDIR /usr/src
ENV NODE_ENV="production"
ENV PATH="./node_modules/.bin:$PATH"

COPY --from=build /usr/src .

CMD [ "pm2-docker", "start", "ecosystem.config.js" ]