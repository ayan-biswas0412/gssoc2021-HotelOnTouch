const { Router } = require("express");
const router = Router();
const SampleController = require("../controller/SampleController");

router.get("/", SampleController.all)
router.get('/:id', SampleController.byId);
router.post('/',SampleController.create);
router.put('/:id',SampleController.update);
router.delete('/:id',SampleController.remove);

module.exports = router;    