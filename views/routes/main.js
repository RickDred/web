const express = require("express");
const app = express();
const router = express.Router();
app.set('view engine', 'ejs')
router
    .route("/")
    .get((req, res) => res.render("pages/main"))
module.exports = router;