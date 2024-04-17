FROM nodejs:20-ubi9
USER root
WORKDIR /app

COPY . .
## Copy the static website files to the Nginx document root
#COPY ./packages/web-ui/out /usr/share/nginx/html
RUN dnf install yarn -y
RUN npm install
#RUN npx tsc --build --clean
RUN npm build

EXPOSE 3000
USER 1001
CMD ["npm", "start"]

