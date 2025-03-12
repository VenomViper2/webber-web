FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration=production --project=webber-web

FROM nginx:alpine
COPY --from=build /app/dist/webber-web/browser /usr/share/nginx/html/henge
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
