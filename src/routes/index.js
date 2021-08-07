const express = require("express");
const stripRouter = require("./strip");
const busRouter = require("./bus");
const vmRouter = require("./voicemeeter");

const router = express.Router();

router.use("/strip", stripRouter);
router.use("/bus", busRouter);
router.use("/voicemeeter", vmRouter);


module.exports = router;