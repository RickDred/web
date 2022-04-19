const express = require("express");
const app = express();
const port = 3000;

//app.use(express.static(__dirname + '/static'));app.use(express.static(__dirname + '/static'));

app.use("/", require("./routes/index"));
app.use("/home", require("./routes/home"));
app.use("/about", require("./routes/about"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);