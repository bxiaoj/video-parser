# Video-Parser

[English](README.en.md)

Video-Parser 的目标是解析海内外主流视频网站的视频地址，目前支持的网站有：抖音，后续还会支持更多的网站（快手，Tiktok，YouTube，B站，斗鱼，虎牙等）。

[FirRock](http://vproctol.zeed.ink/) 提供免费稳定的服务支持，特别感谢！

声明：本项目仅供学习交流使用，不得用于商业用途，如有侵权，请联系作者删除。

### Video-Parser目标
* 解析目前主流的视频网站的视频地址
* 提供稳定的版本
* 保持最新的视频网站的解析
* 第一时间更新&修复


## 接口

### 抖音
* 获取原始链接 `/api/dy/originalUrlFetch`
* 获取直播间信息 `/api/dy/fetchLiveRoomInfo`
* 综合搜索 `/api/dy/generalSearch`
* 视频搜索 `/api/dy/videoSearch`
* 话题搜索 `/api/dy/topicSearch`
* 获取用户视频列表 `/api/dy/getUserVideos`
* 获取用户信息 `/api/dy/getUserInfo`
* 获取用户评论 `/api/dy/getVideoComments`
* 获取视频信息 `/api/dy/getVideoDetail`

说明：其他接口需要传的参数往往可以调用`获取原始链接`获取相应的链接，如获取视频评论需要传视频id，可以将视频链接转换原始链接获取视频id。

## 部署

说明：
* 本项目是基于`nodejs` `express`框架开发的，需要先安装`nodejs`环境，建议使用`v16`以后的稳定版本。
* 其他语言或者需要自行封装调用，可直接参考[FirRock](http://vproctol.zeed.ink/) 提供的接口文档`免费`接入。

### node命令部署

* clone项目到本地
* 进入项目目录，执行`npm install`安装依赖
* 执行`npm start`启动项目
* 访问`http://localhost:3000`即可

### node pm2部署

* clone项目到到目录`/code`下
* 进入项目目录，执行`npm install`安装依赖
* 执行`pm2 start /code/video-parser/process-pm2.json`启动项目
* 访问`http://localhost:3000`即可
* 执行`pm2 reload /code/video-parser/process-pm2.json`重新加载项目（有版本更新时）
* 执行`pm2 stop video-parser`停止项目
* 执行`pm2 restart video-parser`重启项目
* 执行`pm2 delete video-parser`删除项目

### docker部署

* clone项目到本地
* 进入项目目录，使用以下命令在项目根目录下构建Docker镜像：
```
docker build -t video-parser .
```

* 使用以下命令在后台运行容器：
```
docker run -itd -p 3000:3000 --name video-parser video-parser
```

* 访问`http://localhost:3000`即可

## 版权和许可证

```text

Copyright (c) [2023] [bxiaoj]

A license is hereby granted free of charge to anyone who acquires a copy of this software or related documentation ("Software"),
To manipulate the software without restriction, including but not limited to using, copying, modifying, merging, distributing,
distribute, sublicense and/or sell copies of the software, and permit the person to whom the software belongs to
On the property supplied, the following conditions must be met:

1. Create a new issue or private message the author in issues, explaining the usage and purpose of the project;
2. It cannot be used for any illegal and harmful behaviors that damage the health and interests of others

The above copyright notice and this permission notice shall be included on all copies or most substantial portions of the Software.

```

## 作者

* [bxiaoj](https://github.com/bxiaoj)

## 链接

[FirRock](http://vproctol.zeed.ink/) 提供免费稳定的服务支持，再次特别感谢！


## 备注

* 本项目仅供学习交流使用，不得用于商业用途，如有侵权，请联系作者删除。
* 欢迎大家提出宝贵的意见和建议，有问题可以提issue
* 有能力的朋友可以提PR，一起完善项目
* 欢迎大家`star` `fork`，支持一下作者，谢谢！
