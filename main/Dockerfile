# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]