/* 
 * Notes Server
 */

var express = require("express");
var app = express();

app.use("/node_modules", express.static("./node_modules"));
app.use(express.static("./src"));

app.listen(8080)