FROM nginx:alpine
ENV NODE_ENV=prod
COPY dist/ /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]