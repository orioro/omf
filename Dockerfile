## Use a lightweight base image
#FROM nginx:alpine
#
## Copy the static website files to the Nginx document root
#COPY ./packages/web-ui/out /usr/share/nginx/html

FROM docker.io/library/node:20
WORKDIR /app

COPY . .

RUN yarn install

ENV NEXT_PUBLIC_API_BASE_URL=https://dev-apibairrocompras.sde.fortaleza.ce.gov.br

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
