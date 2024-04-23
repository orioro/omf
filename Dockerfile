FROM nodejs:20-ubi8

USER root

RUN npm install -g yarn

WORKDIR /opt/app-root/src

COPY . .

RUN yarn install


USER 1001

EXPOSE 3000

CMD ["yarn", "start"]
