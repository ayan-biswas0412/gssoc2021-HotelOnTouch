const { Router } = require("express");
const router = Router();
const OrderController = require("../controller/orderController");

router.get("/", OrderController.allorders);


router.get('/customer', OrderController.getOrderbyCustomer);


router.post('/',OrderController. createOrder);


router.put('/customer',OrderController.updateOrder);


router.delete('/customer',OrderController. deleteOrder);

module.exports = router;    