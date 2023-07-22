# 使用Node.js镜像作为基础镜像
FROM node:16

# 设置工作目录
WORKDIR /usr/src/app

# 复制package.json和package-lock.json（如果有）到工作目录
COPY package*.json ./

# 安装项目的依赖项
RUN npm install

# 将项目文件复制到工作目录
COPY . .

# 暴露项目运行的端口，根据项目需要调整端口号
EXPOSE 3000

# 启动项目
CMD ["npm", "start"]
