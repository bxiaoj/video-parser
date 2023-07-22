const axios = require('axios');
const Constants = require('./Constants');

class DyHttpClient {
    constructor(customHeaders, axiosOptions) {

        this.axiosInstance = axios.create({
            timeout: 30000,
            headers: {
                ...Constants.DEFAULT_HEADERS,
                ...customHeaders,
            },
            ...(axiosOptions || {}),
        });
    }

    get(url, responseType) {
        return this.axiosInstance.get(url, { responseType });
    }

    post(url, params, data, responseType) {
        return this.axiosInstance.post(url, data, { params, responseType });
    }

    buildUrl(host, path, params) {
        return `${host}${path}?${new URLSearchParams(params || {})}`;
    }
}

module.exports = DyHttpClient;
