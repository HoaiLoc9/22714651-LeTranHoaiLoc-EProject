# Dockerfile
FROM node:18-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ source code vào container
COPY . .

# Mở port ứng dụng
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["npm", "start"]
