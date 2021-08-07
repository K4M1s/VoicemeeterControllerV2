const router = require("express").Router();
const busController = require("../controllers/bus");

router.get("/", busController.get);
router.get("/:id", busController.get);
router.put("/:id", busController.put);

module.exports = router;