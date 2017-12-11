/* 
 * Notes Server
 */

var express = require("express");
var app = express();

app.route("/api/random").get(function (req, res) {

    var title = req.query["title"] || "Random Data";
    var max = Number(req.query["max"] || "100");

    var a = [];

    for (var i = 0; i < 100; ++i) {
        a.push({
            x: i,
            y: Math.floor(Math.random() * max)
        })
    }

    res.json({
        title: title,
        values: a
    });
})


app.use("/node_modules", express.static("./node_modules"));
app.use(express.static("./src"));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: "./src" });
});

app.listen(8080)