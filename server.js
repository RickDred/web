const express = require("express");
const app = express();
var ejs = require('ejs');
var path = require('path');
const port = 3000;



app.use(express.static(__dirname + '/static'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.use("/", require("./views/routes/main"));
app.use("/login", require("./views/routes/login"));
app.use("/register", require("./views/routes/register"));
app.use("/profile", require("./views/routes/profile"));
app.use("/about", require("./views/routes/about"));
app.use("/main", require("./views/routes/main"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);