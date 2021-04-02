const { Router } = require("express");
const router = Router();
const OrderController = require("../controller/orderController");

router.get("/", OrderController.allorders);


router.get('/:customerId', OrderController.getOrderbyCustomer);


router.post('/',OrderController. createOrder);


router.put('/:id',OrderController.updateOrder);


router.delete('/:id',OrderController. deleteOrder);

module.exports = router;    