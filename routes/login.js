const express = require("express");
const app = express();
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(process.cwd()+"/login.ejs"))
    .post((req, res) => res.send("POST HOME"));
module.exports = router;
