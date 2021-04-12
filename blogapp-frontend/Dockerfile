# etapa de compilación
FROM node:lts-alpine as build-stage

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run build

# etapa de producción
FROM nginx:alpine as production-stage
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /usr/src/nginx/conf.d/default.conf
EXPOSE 80