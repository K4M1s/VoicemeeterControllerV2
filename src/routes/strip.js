const router = require("express").Router();
const stripController = require("../controllers/strip");

router.get("/", stripController.get);
router.get("/:id", stripController.get);
router.put("/:id", stripController.put);

module.exports = router;