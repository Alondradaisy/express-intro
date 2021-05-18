const express = require("express");
const logger = require("morgan");
const path = require("path");

const teamRouter = require("./routes/teamRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use()


