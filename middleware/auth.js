const jwt = require("jsonwebtoken");

verifytoken = (req, res, next) => {

    let authHeader = req.headers.authorization;

    if (authHeader == undefined) {
        res.status(401).send({
            error: "no token provided"
        });
    }
    let token = authHeader.split(" ")[1];

    jwt.verify(token, "secret", function(error, decoded) {
        if (error) {

            console.log(error);

            res.status(500).send({
                error: "Authentication failed"
            })
        } else {
            // res.send(decoded);
            next();
        }
    })

};

const Authentication = {
    verifytoken: verifytoken
};

module.exports = {
    Authentication
};