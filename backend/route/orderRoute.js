const { Router } = require("express");
const router = Router();
const OrderController = require("../controller/orderController");

/**
 * @swagger
 * /sampleroute:
 *   get:
 *     summary: Test Route 1
 *     description: This is a testing route to check the development server setup
*/
router.get("/", OrderController.allorders);

/**
 * @swagger
 * /sampleroute/:id:
 *   get:
 *     summary: Test Route 2
 *     description: This is a testing route to check the development server setup
*/
router.get('/:customerId', OrderController.getOrderbyCustomer);

/**
 * @swagger
 * /sampleroute:
 *   post:
 *     summary: Test Route 3
 *     description: This is a testing route to check the development server setup
*/
router.post('/',OrderController. createOrder);

/**
 * @swagger
 * /sampleroute/:id:
 *   put:
 *     summary: Test Route 4
 *     description: This is a testing route to check the development server setup
*/
router.put('/:id',OrderController.updateOrder);

/**
 * @swagger
 * /sampleroute/:id:
 *   delete:
 *     summary: Test Route 5
 *     description: This is a testing route to check the development server setup
*/
router.delete('/:id',OrderController. deleteOrder);

module.exports = router;    