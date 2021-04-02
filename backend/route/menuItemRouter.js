const { Router } = require("express");
const menuItemController = require("../controller/menuController");
const router = Router();
const MenuController = require("../controller/menuController");


router.get("/", MenuController.allItems);


router.get('/:dishId', MenuController.getItem);


router.post('/',MenuController.createItem);


router.put('/:dishId',MenuController.updateItem);

router.delete('/:dishId',MenuController.deleteItem);


router.get("/search/:dishexp",MenuController.searchdishes)

module.exports = router;    