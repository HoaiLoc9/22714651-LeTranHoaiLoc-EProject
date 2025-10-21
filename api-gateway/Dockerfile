# Sử dụng Node.js 18 (phiên bản ổn định, nhẹ)
FROM node:18-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Copy file khai báo dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm ci --omit=dev

# Copy toàn bộ source code vào container
COPY . .

# Expose port mà API của bạn chạy (ví dụ 3000)
EXPOSE 3003

# Lệnh khởi động ứng dụng
CMD ["npm", "start"]
