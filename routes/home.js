const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendfile(process.cwd()+"/home.html"))
    .post((req, res) => res.send("POST HOME"));
module.exports = router;
