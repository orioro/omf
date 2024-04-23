FROM registry.redhat.io/rhel9/nodejs-20:1-34.1712566506

USER root

RUN npm install -g yarn

WORKDIR /opt/app-root/src

COPY . .

RUN yarn install


USER 1001

EXPOSE 3000

CMD ["yarn", "start"]
