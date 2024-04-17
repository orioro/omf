FROM nodejs:20-ubi9

WORKDIR /app

COPY . .
## Copy the static website files to the Nginx document root
#COPY ./packages/web-ui/out /usr/share/nginx/html

#RUN npm install
#RUN npx tsc --build --clean
#RUN npm build

EXPOSE 3000

CMD ["npm", "start"]

