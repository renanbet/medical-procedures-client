FROM node:10-stretch as build

WORKDIR /home/app

RUN npm install -g @angular/cli

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080

FROM nginx:alpine

# Stream the nginx logs to stdout and stderr
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /home/app/dist/client/ /usr/share/nginx/html/

EXPOSE 80
