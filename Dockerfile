FROM nginx:latest
COPY dist/routing-intro /usr/share/nginx/html
EXPOSE 80
