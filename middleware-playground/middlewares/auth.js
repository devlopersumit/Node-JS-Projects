const auth = (req, res, next) => {
    const token = req.headers["x-auth-token"];
    if(token === "mysecrettoken") {
        console.log("✅Authenticated");
        next();
    } else {
        res.status(401).json({error:"Unauthorized - No/Invalid Token"});
    }
};

module.exports = auth;