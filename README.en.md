# Video-Parser

[简体中文](README.md) | English

Video-Parser's goals to analyze the video addresses of mainstream video websites at home and abroad. The currently supported websites are: Douyin, and more websites will be supported in the future (Kuaishou, Tiktok, YouTube, Bilibili, Douyu, Huya, etc.).

[FirRock](http://vproctol.zeed.ink/) Provide free and stable service support, thank you!

Disclaimer: This project is only for learning and communication, not for commercial purposes. If there is any infringement, please contact the author to delete it.

### Video-Parser Goals
* Parse the video address of the current mainstream video website
* provide stable version
* Keep up-to-date analysis of video sites
* Update & fix for the first time


## api

### Douyin
* Get the original URL `/api/dy/originalUrlFetch` `POST`
* Get live room information `/api/dy/fetchLiveRoomInfo` `POST`
* General search `/api/dy/generalSearch` `GET`
* Video search `/api/dy/videoSearch` `GET`
* Topic search `/api/dy/topicSearch` `GET`
* Get user video list `/api/dy/getUserVideos` `GET`
* Get user information `/api/dy/getUserInfo` `GET`
* Get user comments `/api/dy/getVideoComments` `GET`
* Get video information `/api/dy/getVideoDetail` `GET`

Note: For other interfaces that need to pass parameters, you can often call `Get Original Link` to get the corresponding link. For example, if you need to pass the video id to get video comments, you can convert the video link to the original link to get the video id.


## example

BASE_URL: `http://localhost:3000`

### Douyin

#### Get original link

* **Request address**: `/api/dy/originalUrlFetch`
* **Request method**: `POST`
* **Request parameter**: `json`

```json
{
   "share_info": "2.00 OxF:/ Xiaohe just showed her sharp corners~ https://v.douyin.com/iVsR2SK/ Copy this link, open Douyin search, and watch the video directly!"
}
```

* Response parameters: `json`

```json
{
   "code": 200,
   "msg": "success",
   "data": {
     "original_url": "https://www.iesdouyin.com/share/video/7257768974631374115/?region=CN&mid=6984719806654089992&u_code=0&did=MS4wLjABAAAAbqVwCUBSDPsPpMvTx0vOuEduviBhgeXBDDMB qJYrSpkKOz8kHRuu7fVYM11smy75&iid=MS4wLjABAAAANwkJuWIRFOzg5uCpDRpMj4OX-QryoDgn-yYlXQnRwQQ&with_sec_did=1&titleType=title&share_sign=rIjKXqSq7BmP1zv22aQW8o Wg.6HvSSBDPJhgiH4LmIg-&share_version=170400&ts=1689845499&from_ssr=1&from=web_code_link"
   }
}
```

---

#### Get live room information

* **Request address**: `/api/dy/fetchLiveRoomInfo`
* **Request method**: `POST`
* **Request parameter**: `json`

```json
{
   "live_url": "https://v.douyin.com/kD1pKKR"
}
```

* **Response parameter**: `json` (the content is too long, not shown here)

---

#### Comprehensive Search

* **Request Address**: `/api/dy/generalSearch?keyword=Shaanxi Culture&sort_type=0&publish_time=0&offset=0&count=10`
* **Request method**: `GET`
* **Response parameter**: `json` (the content is too long, not shown here)

---

#### Video Search

* **Request Address**: `/api/dy/videoSearch?keyword=Shaanxi Culture&sort_type=0&publish_time=0&offset=0&count=10`
* **Request method**: `GET`
* **Response parameter**: `json` (the content is too long, not shown here)

---

#### Topic Search

* **Request Address**: `/api/dy/topicSearch?keyword=Shaanxi Culture&sort_type=0&publish_time=0&offset=0&count=10`
* **Request method**: `GET`
* **Response parameter**: `json` (the content is too long, not shown here)

---

#### Get user homepage video list

* **Request address**: `/api/dy/getUserVideos?sec_uid=MS4wLjABAAAA5qMD8Gzdcgq7HXUOviKB59i0-ybJ59jJvNzyaPt5XOsVNqP6DU7WLcoAXvdxvYdp&count=15&max_cursor=0`
* **Request method**: `GET`
* **Response parameter**: `json` (the content is too long, not shown here)

---

#### Get user information

* **Request address**: `/api/dy/getUserInfo?sec_uid=MS4wLjABAAAA5qMD8Gzdcgq7HXUOviKB59i0-ybJ59jJvNzyaPt5XOsVNqP6DU7WLcoAXvdxvYdp`
* **Request method**: `GET`
* **Response parameter**: `json` (the content is too long, not shown here)

---

#### Get Video Comments

* **Request Address**: `/api/dy/getVideoComments?aweme_id=6958148148680857863&count=20&cursor=0`
* **Request method**: `GET`
* **Response parameter**: `json` (the content is too long, not shown here)

---

#### Get video details

* **Request URL**: `/api/dy/getVideoDetail?aweme_id=7055666575176781069`
* **Request method**: `GET`
* **Response parameter**: `json` (the content is too long, not shown here)

## deployment

illustrate:
* This project is developed based on the `nodejs` `express` framework. It is necessary to install the `nodejs` environment first. It is recommended to use a stable version after `v16`.
* For other languages or need to encapsulate and call by yourself, you can directly refer to the interface document provided by [FirRock](http://vproctol.zeed.ink/) for `free` access.

### node command deployment

* clone project to local
* Enter the project directory, execute `npm install` to install dependencies
* Execute `npm start` to start the project
* Just visit `http://localhost:3000`

### node pm2 deployment

* clone project to directory `/code`
* Enter the project directory, execute `npm install` to install dependencies
* Execute `pm2 start /code/video-parser/process-pm2.json` to start the project
* Just visit `http://localhost:3000`
* Execute `pm2 reload /code/video-parser/process-pm2.json` to reload the project (when there is a version update)
* Execute `pm2 stop video-parser` to stop the project
* Execute `pm2 restart video-parser` to restart the project
* Execute `pm2 delete video-parser` to delete the project

### docker deployment

* clone project to local
* Enter the project directory and use the following command to build a Docker image under the project root directory:
```
docker build -t video-parser .
```

* Run the container in the background with the following command:
```
docker run -itd -p 3000:3000 --name video-parser video-parser
```

* Just visit `http://localhost:3000`

## Copyright and License

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

## Authors

* [bxiaoj](https://github.com/bxiaoj)

## Links

[FirRock](http://vproctol.zeed.ink/) Provide free and stable service support, thank you again!


## Remark

* This project is only for learning and communication, not for commercial purposes, if there is any infringement, please contact the author to delete.
* Welcome everyone to put forward valuable comments and suggestions, if you have any questions, you can raise an issue
* Competent friends can submit PR to improve the project together
* Welcome to `star` `fork`, support the author, thank you!
