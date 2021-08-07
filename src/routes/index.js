const express = require("express");
const stripRouter = require("./strip");
const busRouter = require("./bus");

const router = express.Router();

router.use("/strip", stripRouter);
router.use("/bus", busRouter);


module.exports = router;