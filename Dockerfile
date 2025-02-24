# Step 1: Build Angular app
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project and build the Angular app
COPY . .
RUN npm run build -- --configuration=production --project=webber-web

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/webber-web/browser /usr/share/nginx/html

# Copy custom Nginx configuration (optional, see below)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
