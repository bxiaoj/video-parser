# Video-Parser

简体中文 | [English](README.en.md)

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
* 获取原始链接 `/api/dy/originalUrlFetch` `POST`
* 获取直播间信息 `/api/dy/fetchLiveRoomInfo` `POST`
* 综合搜索 `/api/dy/generalSearch` `GET`
* 视频搜索 `/api/dy/videoSearch` `GET`
* 话题搜索 `/api/dy/topicSearch` `GET`
* 获取用户视频列表 `/api/dy/getUserVideos` `GET`
* 获取用户信息 `/api/dy/getUserInfo` `GET`
* 获取用户评论 `/api/dy/getVideoComments` `GET`
* 获取视频信息 `/api/dy/getVideoDetail` `GET`
* 获取用户最近视频列表简版 `/api/dy/getUserVideosSimpleRecent` `GET`

说明：其他接口需要传的参数往往可以调用`获取原始链接`获取相应的链接，如获取视频评论需要传视频id，可以将视频链接转换原始链接获取视频id。

### Tiktok
* 获取原始链接 `/api/tk/originalUrlFetch` `POST`
* 获取直播间信息 `/api/tk/fetchLiveRoomInfo` `POST`
* 获取用户视频列表 `/api/tk/getUserVideos` `GET`
* 获取用户信息 `/api/tk/getUserInfo` `GET`
* 获取视频信息 `/api/tk/getVideoDetail` `GET`

说明：其他接口需要传的参数往往可以调用`获取原始链接`获取相应的链接，如获取视频评论需要传视频id，可以将视频链接转换原始链接获取视频id。

### 工具
* Ip详细信息查询 `/api/utils/queryIp` `GET`


## 例子

BASE_URL: `http://localhost:3000`

### 抖音

#### 获取原始链接

* **请求地址**：`/api/dy/originalUrlFetch`
* **请求方式**：`POST`
* **请求参数**：`json`

```json
{
  "share_info": "2.00 OxF:/ 小荷才露尖尖角～  https://v.douyin.com/iVsR2SK/ 复制此链接，打开Dou音搜索，直接观看视频！"
}
```

* 响应参数：`json`

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "original_url": "https://www.iesdouyin.com/share/video/7257768974631374115/?region=CN&mid=6984719806654089992&u_code=0&did=MS4wLjABAAAAbqVwCUBSDPsPpMvTx0vOuEduviBhgeXBDDMBqJYrSpkKOz8kHRuu7fVYM11smy75&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&titleType=title&share_sign=rIjKXqSq7BmP1zv22aQW8oWg.6HvSSBDPJhgiH4LmIg-&share_version=170400&ts=1689845499&from_ssr=1&from=web_code_link"
  }
}
```

---

#### 获取直播间信息

* **请求地址**：`/api/dy/fetchLiveRoomInfo`
* **请求方式**：`POST`
* **请求参数**：`json`

```json
{
  "live_url": "https://v.douyin.com/kD1pKKR"
}
```

* **响应参数**：`json` （内容太长，此处不展示）

---

#### 综合搜索

* **请求地址**：`/api/dy/generalSearch?keyword=陕西文化&sort_type=0&publish_time=0&offset=0&count=10`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 视频搜索

* **请求地址**：`/api/dy/videoSearch?keyword=陕西文化&sort_type=0&publish_time=0&offset=0&count=10`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 话题搜索

* **请求地址**：`/api/dy/topicSearch?keyword=陕西文化&sort_type=0&publish_time=0&offset=0&count=10`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取用户主页视频列表

* **请求地址**：`/api/dy/getUserVideos?sec_uid=MS4wLjABAAAA5qMD8Gzdcgq7HXUOviKB59i0-ybJ59jJvNzyaPt5XOsVNqP6DU7WLcoAXvdxvYdp&count=15&max_cursor=0`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取用户信息

* **请求地址**：`/api/dy/getUserInfo?sec_uid=MS4wLjABAAAA5qMD8Gzdcgq7HXUOviKB59i0-ybJ59jJvNzyaPt5XOsVNqP6DU7WLcoAXvdxvYdp`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取视频评论

* **请求地址**：`/api/dy/getVideoComments?aweme_id=6958148148680857863&count=20&cursor=0`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取视频详情

* **请求地址**：`/api/dy/getVideoDetail?aweme_id=7055666575176781069`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取用户最近视频列表简版

* **请求地址**：`/api/dy/getUserVideosSimpleRecent?sec_uid=MS4wLjABAAAA5qMD8Gzdcgq7HXUOviKB59i0-ybJ59jJvNzyaPt5XOsVNqP6DU7WLcoAXvdxvYdp`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

### Tiktok

#### 获取原始链接

* **请求地址**：`/api/tk/originalUrlFetch`
* **请求方式**：`POST`
* **请求参数**：`json`

```json
{
  "share_info": "https://www.tiktok.com/t/ZTRypfB5D/"
}
```

* 响应参数：`json`

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "original_url": "https://www.tiktok.com/video/7257768974631374115"
  }
}
```

---

#### 获取直播间信息

* **请求地址**：`/api/tk/fetchLiveRoomInfo`
* **请求方式**：`POST`
* **请求参数**：`json`

```json
{
  "live_url": "https://www.tiktok.com/t/ZTRypfB5D/"
}
```

* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取用户主页视频列表

* **请求地址**：`/api/tk/getUserVideos?sec_uid=MS4wLjABAAAAhgKK-EJ_9MmIP0LNyu6-pFEhiffelae0N0c3xdxFymHFseWJ-SsTRqm9AIiIUTtI&count=30&cursor=0`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取用户信息

* **请求地址**：`/api/tk/getUserInfo?sec_uid=MS4wLjABAAAAhgKK-EJ_9MmIP0LNyu6-pFEhiffelae0N0c3xdxFymHFseWJ-SsTRqm9AIiIUTtI`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

---

#### 获取视频详情

* **请求地址**：`/api/tk/getVideoDetail?unique_id=unpai3`
* **请求方式**：`GET`
* **响应参数**：`json` （内容太长，此处不展示）

### 工具

#### Ip或host详细信息查询

* **请求地址**：`/api/utils/queryIp?host=baidu.com`
* **请求方式**：`GET`
* **请求参数**：`json`

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
