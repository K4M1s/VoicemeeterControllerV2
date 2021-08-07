const router = require("express").Router();

router.get("/", require("../controllers/voicemeeter").get);

module.exports = router;