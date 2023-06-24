# 使用官方的Nginx镜像作为基础
FROM nginx

# 清空默认网站目录
RUN rm -rf /usr/share/nginx/html/*
# 移除默认的nginx.conf和default.conf
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 复制自定义的nginx.conf文件到容器内的默认配置路径
COPY nginx.conf /etc/nginx/nginx.conf

# 将本地的out文件夹复制到容器内的默认网站目录
COPY ./out /usr/share/nginx/html

# 暴露容器的80端口
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]
