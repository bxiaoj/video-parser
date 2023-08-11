const express = require('express');
const app = express();
const { validateParams } = require('./src/lib/validateParams');
const dyVideoParserService = require('./src/service/dyVideoParserService');
const tkVideoParserService = require('./src/service/tkVideoParserService');
const utilsService = require('./src/service/utilsService');
const Response = require('./src/lib/Response');
const Errors = require('./src/lib/Errors');

app.use(express.json());

app.post('/api/dy/originalUrlFetch', validateParams(['share_info']), async (req, res) => {
    const { share_info } = req.body;

    if (share_info.indexOf('http') === -1) {
        return new Response(res).result(Errors.PARAMS_VALIDATE_FAIL, 'share_info not contain url')
    }

    try {
        const data = await dyVideoParserService.originalUrlFetch(share_info);
        if (!data) {
            return new Response(res).fail('original url fetch Error')
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('original url fetch Error',  e.message);
    }
});

app.post('/api/dy/fetchLiveRoomInfo', validateParams(['live_url']), async (req, res) => {
    const { live_url } = req.body;

    if (live_url.indexOf('http') === -1) {
        return new Response(res).result(Errors.PARAMS_VALIDATE_FAIL, 'live_url not contain url')
    }

    try {
        const data = await dyVideoParserService.fetchLiveRoomInfo(live_url);
        if (!data) {
            return new Response(res).fail('fetch live room info Error')
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('fetch live room info Error',  e.message);
    }
});

app.get('/api/dy/generalSearch', validateParams(['keyword', 'sort_type', 'publish_time', 'offset', 'count']), async (req, res) => {
    const { keyword, sort_type, publish_time, offset, count } = req.query;
    try {
        const data = await dyVideoParserService.generalSearch(keyword, sort_type, publish_time, offset, count);
        if (!data) {
            return new Response(res).fail('general search Error')
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('general search Error',  e.message);
    }
});

app.get('/api/dy/videoSearch', validateParams(['keyword', 'sort_type', 'publish_time', 'offset', 'count']), async (req, res) => {
    const { keyword, sort_type, publish_time, offset, count } = req.query;
    try {
        const data = await dyVideoParserService.videoSearch(keyword, sort_type, publish_time, offset, count);
        if (!data) {
            return new Response(res).fail('video search Error')
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('video search Error',  e.message);
    }
});

app.get('/api/dy/topicSearch', validateParams(['keyword', 'sort_type', 'publish_time', 'offset', 'count']), async (req, res) => {
    const { keyword, sort_type, publish_time, offset, count } = req.query;
    try {
        const data = await dyVideoParserService.topicSearch(keyword, sort_type, publish_time, offset, count);
        if (!data) {
            return new Response(res).fail('topic search Error')
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('topic search Error',  e.message);
    }
});

app.get('/api/dy/getUserVideos', validateParams(['sec_uid', 'count', 'max_cursor']), async (req, res) => {
    const { sec_uid, count, max_cursor } = req.query;
    try {
        const data = await dyVideoParserService.getUserVideos(sec_uid, count, max_cursor);
        if (!data) {
            return new Response(res).fail('get user videos Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('get user videos Error',  e.message);
    }
});

app.get('/api/dy/getUserInfo', validateParams(['sec_uid']), async (req, res) => {
    const { sec_uid } = req.query;
    try {
        const data = await dyVideoParserService.getUserInfo(sec_uid);
        if (!data) {
            return new Response(res).fail('get user info Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('get user info Error',  e.message);
    }
});

app.get('/api/dy/getVideoComments', validateParams(['aweme_id', 'count', 'cursor']), async (req, res) => {
    const { aweme_id, count, cursor } = req.query;
    try {
        const data = await dyVideoParserService.getVideoComments(aweme_id, count, cursor);
        if (!data) {
            return new Response(res).fail('get video comments Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('get video comments Error',  e.message);
    }
});

app.get('/api/dy/getVideoDetail', validateParams(['aweme_id']), async (req, res) => {
    const { aweme_id } = req.query;
    try {
        const data = await dyVideoParserService.getVideoDetail(aweme_id);
        if (!data) {
            return new Response(res).fail('get video detail Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('get video detail Error',  e.message);
    }
});

app.get('/api/dy/getUserVideosSimpleRecent', validateParams(['sec_uid']), async (req, res) => {
    const { sec_uid } = req.query;
    try {
        const data = await dyVideoParserService.getUserVideosSimpleRecent(sec_uid);
        if (!data) {
            return new Response(res).fail('get user videos simple recent Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('get user videos simple recent Error',  e.message);
    }
});

app.post('/api/tk/originalUrlFetch', validateParams(['share_info']), async (req, res) => {
    const { share_info } = req.body;

    if (share_info.indexOf('http') === -1) {
        return new Response(res).result(Errors.PARAMS_VALIDATE_FAIL, 'share_info not contain url')
    }

    try {
        const data = await tkVideoParserService.originalUrlFetch(share_info);
        if (!data) {
            return new Response(res).fail('original url fetch Error')
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('original url fetch Error',  e.message);
    }
});

app.post('/api/tk/fetchLiveRoomInfo', validateParams(['live_url']), async (req, res) => {
    const { live_url } = req.body;

    if (live_url.indexOf('http') === -1) {
        return new Response(res).result(Errors.PARAMS_VALIDATE_FAIL, 'live_url not contain url')
    }

    try {
        const data = await tkVideoParserService.fetchLiveRoomInfo(live_url);
        if (!data) {
            return new Response(res).fail('fetch live room info Error')
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('fetch live room info Error',  e.message);
    }
});

app.get('/api/tk/getUserVideos', validateParams(['sec_uid', 'count', 'cursor']), async (req, res) => {
    const { sec_uid, count, cursor } = req.query;
    try {
        const data = await tkVideoParserService.getUserVideos(sec_uid, count, cursor);
        if (!data) {
            return new Response(res).fail('get user videos Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('get user videos Error',  e.message);
    }
});

app.get('/api/tk/getUserInfo', validateParams(['unique_id']), async (req, res) => {
    const {unique_id} = req.query;
    try {
        const data = await tkVideoParserService.getUserInfo(unique_id);
        if (!data) {
            return new Response(res).fail('get user info Error');
        }
        new Response(res).success(data);
    } catch (e) {
        new Response(res).fail('get user info Error', e.message);
    }
});

app.get('/api/tk/getVideoDetail', validateParams(['aweme_id']), async (req, res) => {
    const { aweme_id } = req.query;
    try {
        const data = await tkVideoParserService.getVideoDetail(aweme_id);
        if (!data) {
            return new Response(res).fail('get video detail Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('get video detail Error',  e.message);
    }
});

app.get('/api/utils/queryIp', validateParams(['host']), async (req, res) => {
    const { host } = req.query;
    try {
        const data = await utilsService.queryIp(host);
        if (!data) {
            return new Response(res).fail('query ip Error');
        }
        new Response(res).success(data);
    }catch (e) {
        new Response(res).fail('query ip Error',  e.message);
    }
});

app.listen(3000, () => {
    console.log('API server is running on port 3000');
    console.log('http://localhost:3000');
});
