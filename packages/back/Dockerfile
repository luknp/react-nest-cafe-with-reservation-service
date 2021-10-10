FROM node:12.18.3-alpine

WORKDIR /server

COPY package.json *yarn* /server/
RUN yarn global add @nestjs/cli typescript jest
RUN yarn
ENV PATH /server/node_modules/.bin:$PATH
