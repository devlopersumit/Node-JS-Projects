const express = require('express');
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

//Routes
const publicRoutes = require("./routes/publicRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const errorRoutes = require("./routes/errorRoutes");

const app = express();

app.use(express.json());

app.use(logger);

app.use(publicRoutes);
app.use(errorRoutes);
app.use(dashboardRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server running successfulyy on port 3000"));