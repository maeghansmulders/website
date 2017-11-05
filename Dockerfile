FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nginx

# Remove default nginx config
RUN rm -v /etc/nginx/nginx.conf

# Copy a custom nginx config
ADD nginx.conf /etc/nginx/
ADD mime.types /etc/nginx/

ADD src /usr/maeghan-website
ADD old-website /usr/old-website

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# 90 is new website, 91 is old website
EXPOSE 90 91

CMD service nginx start