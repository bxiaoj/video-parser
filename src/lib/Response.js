const Errors = require('./Errors');

class Response {
    constructor(res) {
        this.res = res;
    }

    success(data) {
        return this.res.status(Errors.SUCCESS.code).json({
            code: Errors.SUCCESS.code,
            msg: Errors.SUCCESS.msg,
            data: data,
        });
    }

    fail(msg, error) {
        return this.res.status(Errors.FAIL.code).json({
            code: Errors.FAIL.code,
            msg: msg || Errors.FAIL.msg,
            error: error || Errors.FAIL.error,
        });
    }

    result(errorInfo, msg, error) {
        return this.res.status(errorInfo.code).json({
            code: errorInfo.code,
            msg: msg || errorInfo.msg,
            error: error || errorInfo.error,
        });
    }
}

module.exports = Response;
