FROM node:10-stretch as build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install -g @angular/cli
RUN npm install
COPY . .

RUN npm run build

EXPOSE 8080

FROM nginx:alpine

# Stream the nginx logs to stdout and stderr
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/client/ /usr/share/nginx/html/

EXPOSE 80
