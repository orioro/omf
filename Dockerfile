## Use a lightweight base image
#FROM nginx:alpine
#
## Copy the static website files to the Nginx document root
#COPY ./packages/web-ui/out /usr/share/nginx/html

#FROM docker.io/library/node:20
FROM node:20

WORKDIR /app

COPY . .

RUN yarn install
RUN npx tsc --build --clean
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

