const logger =(req, res) => {
    console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
    next();
};

module.exports = logger;