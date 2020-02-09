const express = require("express");
const session = require("express-session");
const bodyparser = require("body-parser");
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');

// initialize the process.env variable
require('dotenv').config()

const app = express();

// establish mongoose connections
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(session({secret: "ssshh", saveUninitialized: true, resave: true}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// include the mongoDB models
require('./models/tasks')

require("./routes/api")(app);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running server on ${port}`));