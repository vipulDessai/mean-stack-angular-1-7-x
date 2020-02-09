const express = require("express");
const session = require("express-session");
const bodyparser = require("body-parser");
const path = require('path');
const http = require('http');

const app = express();

app.use(session({secret: "ssshh", saveUninitialized: true, resave: true}));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

require("./routes/api")(app);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 8000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log(`running server on ${port}`));