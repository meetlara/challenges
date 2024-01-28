FROM node:20.11-slim

ENV API_ORIGIN_NAME='channel'
ENV LARA_APP_NAME='channel-api'
ENV LARA_APP_PATH='/opt/deploy'

WORKDIR /opt/deploy

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn run build

ENTRYPOINT ["/opt/deploy/entrypoint.sh"]
CMD ["start", "production"]

