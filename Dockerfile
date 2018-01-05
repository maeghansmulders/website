FROM gliderlabs/alpine

RUN apk-install nginx

# Remove default nginx config
RUN rm -v /etc/nginx/nginx.conf

# Copy a custom nginx config
ADD nginx.conf /etc/nginx/
ADD mime.types /etc/nginx/

ADD src /usr/maeghan-website
ADD old-website /usr/old-website

# 90 is new website, 91 is old website
EXPOSE 90 91

RUN mkdir -p /run/nginx
CMD nginx -g 'daemon off;'