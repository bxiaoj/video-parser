function validateParams(requiredParams) {
    return function (req, res, next) {
        const missingParams = requiredParams.filter(param => !req.query[param] && req.query[param] !== 0 && req.query[param] !== false
            && !req.body[param] && req.body[param] !== 0 && req.body[param] !== false);

        if (missingParams.length > 0) {
            return res.status(400).json({ code: 400, msg: `Missing required parameters: ${missingParams.join(', ')}`, error: `Missing required parameters` });
        }

        next();
    };
}

module.exports = {
    validateParams,
}
