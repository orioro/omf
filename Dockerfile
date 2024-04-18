# Use a lightweight base image
FROM httpd
USER root 

# Copy the static website files to the Nginx document root
COPY ./packages/web-ui/out /opt/app-root/src

USER 1001
CMD ["/usr/bin/run-httpd"]
