const HttpClient = require('../lib/httpClient');
const { API } = require('../lib/Constants');

const httpClient = new HttpClient();

/**
 * fetch original url
 * @param share_info
 * @returns {Promise<null|any>}
 */
async function originalUrlFetch(share_info) {
    const resp = await httpClient.post(API.BASE_URL + API.DY_ORIGINAL_URL_CONVERT, {}, {share_info}, 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY originalUrlFetch failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * fetch live room info
 * @param live_url
 * @returns {Promise<null|any>}
 */
async function fetchLiveRoomInfo(live_url) {
    const resp = await httpClient.post(API.BASE_URL + API.DY_FETCH_LIVE_ROOM_INFO, {}, {live_url}, 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY fetchLiveRoomInfo failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * general search
 * @param keyword
 * @param sort_type
 * @param publish_time
 * @param offset
 * @param count
 * @returns {Promise<null|any>}
 */
async function generalSearch(keyword, sort_type, publish_time, offset, count) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_GENERAL_SEARCH, {keyword, sort_type, publish_time, offset, count}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY generalSearch failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * video search
 * @param keyword
 * @param sort_type
 * @param publish_time
 * @param offset
 * @param count
 * @returns {Promise<null|any>}
 */
async function videoSearch(keyword, sort_type, publish_time, offset, count) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_VIDEO_SEARCH, {keyword, sort_type, publish_time, offset, count}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY videoSearch failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * topic search
 * @param keyword
 * @param sort_type
 * @param publish_time
 * @param offset
 * @param count
 * @returns {Promise<null|any>}
 */
async function topicSearch(keyword, sort_type, publish_time, offset, count) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_TOPIC_SEARCH, {keyword, sort_type, publish_time, offset, count}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY topicSearch failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get user videos
 * @param sec_uid
 * @param count
 * @param max_cursor
 * @returns {Promise<null|any>}
 */
async function getUserVideos(sec_uid, count, max_cursor) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_USER_VIDEOS, {sec_uid, count, max_cursor}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getUserVideos failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get user info
 * @param sec_uid
 * @returns {Promise<null|any>}
 */
async function getUserInfo(sec_uid) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_USER_INFO, {sec_uid}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getUserInfo failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get video comments
 * @param aweme_id
 * @param count
 * @param cursor
 * @returns {Promise<null|any>}
 */
async function getVideoComments(aweme_id, count, cursor) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_VIDEO_COMMENTS, {aweme_id, count, cursor}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getVideoComments failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get video detail
 * @param aweme_id
 * @returns {Promise<null|any>}
 */
async function getVideoDetail(aweme_id) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_VIDEO_DETAIL, {aweme_id}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getVideoDetail failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get user videos simple recent
 * @param sec_uid
 * @returns {Promise<null|any>}
 */
async function getUserVideosSimpleRecent(sec_uid) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.DY_USER_VIDEOS_SIMPLE_RECENT, {sec_uid}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getUserVideosSimpleRecent failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

module.exports = {
    originalUrlFetch,
    fetchLiveRoomInfo,
    generalSearch,
    videoSearch,
    topicSearch,
    getUserVideos,
    getUserInfo,
    getVideoComments,
    getVideoDetail,
    getUserVideosSimpleRecent,
}
