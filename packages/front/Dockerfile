FROM node:10.16.0-alpine AS builder

WORKDIR /app

COPY package.json *yarn* /app/
RUN yarn global add typed-scss-modules
RUN yarn
ENV PATH /app/node_modules/.bin:$PATH
# node_modules are ignored because of .dockerignore file
COPY ./ /app/
EXPOSE 80
RUN yarn build


FROM nginx:latest AS prod
ENV NODE_ENV production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/public /usr/share/nginx/html/public
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g" ,"daemon off;"]
