const rateLimit = require('express-rate-limit');

const RateLimit = ({windowMs, max})=>{
    return rateLimit({
        windowMs,
        max,
        message : {isOk : false, message : "Request limit expired, try another time"},
        // keyGenerator: (req, res) => req.ip || "",
        // handler : callmaxfun
    })
}

module.exports = RateLimit;