FROM node:14 as build-stage
WORKDIR /app

COPY . .
RUN npm run build

FROM nginx:alpine
# RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
