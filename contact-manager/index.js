
const express = require('express');
const connectDB = require('./config/databse');
const contactRouter = require('./routes/contact.controller');
const app = express();

app.use(express.json());

app.use("/", contactRouter);

connectDB()
app.listen(4000, () => {
    console.log("Server started succesfully!!!");
});