const HttpClient = require('../lib/httpClient');
const { API } = require('../lib/Constants');

const httpClient = new HttpClient();

/**
 * query ip
 * @param host
 * @returns {Promise<null|any>}
 */
async function queryIp(host) {
    const resp = await httpClient.get(httpClient.buildUrl(API.BASE_URL, API.UT_QUERY_IP, {host}), 'json');
    if (resp.status === 200 && resp.data && resp.data.code === 200) {
        return resp.data.data;
    }
    console.error(`UT queryIp failed, status = ${resp.status}, errMsg = ${resp.data ? resp.data.msg : 'data is null'} requestId = ${resp.data ? resp.data.request_id : 'data is null'}`);
    return null;
}

module.exports = {
    queryIp,
}
