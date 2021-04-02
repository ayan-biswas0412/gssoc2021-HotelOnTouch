const { Router } = require("express");
const menuItemController = require("../controller/menuController");
const router = Router();
const MenuController = require("../controller/menuController");

/**
 * @swagger
 * /sampleroute:
 *   get:
 *     summary: Test Route 1
 *     description: This is a testing route to check the development server setup
*/
router.get("/", MenuController.allItems);

/**
 * @swagger
 * /sampleroute/:id:
 *   get:
 *     summary: Test Route 2
 *     description: This is a testing route to check the development server setup
*/
router.get('/:dishId', MenuController.getItem);

/**
 * @swagger
 * /sampleroute:
 *   post:
 *     summary: Test Route 3
 *     description: This is a testing route to check the development server setup
*/
router.post('/',MenuController.createItem);

/**
 * @swagger
 * /sampleroute/:id:
 *   put:
 *     summary: Test Route 4
 *     description: This is a testing route to check the development server setup
*/
router.put('/:dishId',MenuController.updateItem);

/**
 * @swagger
 * /sampleroute/:id:
 *   delete:
 *     summary: Test Route 5
 *     description: This is a testing route to check the development server setup
*/
router.delete('/:dishId',MenuController.deleteItem);


router.get("/search/:dishexp",MenuController.searchdishes)

module.exports = router;    