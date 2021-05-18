// practice deving the plate

const express = require("express");
const logger = require("morgan"); 
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render("index", {
        user: "daisy",
        breakfast: [{drink: "black coffee"}, {sustenance: "papaya parfait"}]
        res.send("A day in my life");
        res.json({
            name: "daisy",
            morning: [{"wake up between 5:30 - 6am"}, learn: {"7:30 - 1pm"}, afternoon: {"eat bablela for lunch"}, late afternoon: {"water plants and trees"}]
        })
    })
})