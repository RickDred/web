const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/static'));app.use(express.static(__dirname + '/static'));

app.use("/", require("./routes/main"));
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/profile", require("./routes/profile"));
app.use("/about", require("./routes/about"));
app.use("/main", require("./routes/main"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);