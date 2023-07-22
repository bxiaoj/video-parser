# Video-Parser

[中文](README.md)

Video-Parser's goals to analyze the video addresses of mainstream video websites at home and abroad. The currently supported websites are: Douyin, and more websites will be supported in the future (Kuaishou, Tiktok, YouTube, Bilibili, Douyu, Huya, etc.).

[FirRock](http://vproctol.zeed.ink/) Provide free and stable service support, thank you!

Disclaimer: This project is only for learning and communication, not for commercial purposes. If there is any infringement, please contact the author to delete it.

### Video-Parser Goals
* Parse the video address of the current mainstream video website
* provide stable version
* Keep up-to-date analysis of video sites
* Update & fix for the first time


## api

### Tik Tok
* Fetch the original URL `/api/dy/originalUrlFetch`
* Fetch live room information `/api/dy/fetchLiveRoomInfo`
* General search `/api/dy/generalSearch`
* Video Search `/api/dy/videoSearch`
* topic search `/api/dy/topicSearch`
* Get user video list `/api/dy/getUserVideos`
* Get user information `/api/dy/getUserInfo`
* Get user comments `/api/dy/getVideoComments`
* Get video information `/api/dy/getVideoDetail`

Note: For other interfaces that need to pass parameters, you can often call `Fetch the original URL` to get the corresponding link. For example, if you need to pass the video id to get video comments, you can convert the video link to the original link to get the video id.

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

[FirRock](http://vproctol.zeed.ink/) 提供免费稳定的服务支持，再次特别感谢！


## Remark

* This project is only for learning and communication, not for commercial purposes, if there is any infringement, please contact the author to delete.
* Welcome everyone to put forward valuable comments and suggestions, if you have any questions, you can raise an issue
* Competent friends can submit PR to improve the project together
* Welcome to `star` `fork`, support the author, thank you!
