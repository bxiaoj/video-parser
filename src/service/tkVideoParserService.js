const HttpClient = require('../lib/httpClient');
const { API } = require('../lib/Constants');

const httpClient = new HttpClient();

/**
 * fetch original url
 * @param share_info
 * @returns {Promise<null|any>}
 */
async function originalUrlFetch(share_info) {
    const resp = await httpClient.post(API.BASE_URL + API.TK_ORIGINAL_URL_CONVERT, {}, {share_info}, 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`TK originalUrlFetch failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * fetch live room info
 * @param live_url
 * @returns {Promise<null|any>}
 */
async function fetchLiveRoomInfo(live_url) {
    const resp = await httpClient.post(API.BASE_URL + API.TK_FETCH_LIVE_ROOM_INFO, {}, {live_url}, 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`TK fetchLiveRoomInfo failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get user videos
 * @param sec_uid
 * @param count
 * @param cursor
 * @returns {Promise<null|any>}
 */
async function getUserVideos(sec_uid, count, cursor) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.TK_USER_VIDEOS, {sec_uid, count, cursor}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getUserVideos failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get user info
 * @param unique_id
 * @returns {Promise<null|any>}
 */
async function getUserInfo(unique_id) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.TK_USER_INFO, {unique_id}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getUserInfo failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

/**
 * get video detail
 * @param aweme_id
 * @returns {Promise<null|any>}
 */
async function getVideoDetail(aweme_id) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.TK_VIDEO_DETAIL, {aweme_id}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`DY getVideoDetail failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

module.exports = {
    originalUrlFetch,
    fetchLiveRoomInfo,
    getUserVideos,
    getUserInfo,
    getVideoDetail,
}
