FROM nodejs:20-ubi9

WORKDIR /app

COPY . .
## Copy the static website files to the Nginx document root
#COPY ./packages/web-ui/out /usr/share/nginx/html

RUN yarn install
RUN npx tsc --build --clean
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]

