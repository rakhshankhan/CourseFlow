const express = require("express");
const routes = require("./routes");
const connectDB = require('./config/db');
const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require('cors');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8000");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Credentials");
//     next();
// });

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

app.use("/", express.static("public"));
app.use("/api", routes);

// Define port and start server
const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
