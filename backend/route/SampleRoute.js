const { Router } = require("express");
const router = Router();
const SampleController = require("../controller/SampleController");

/**
 * @swagger
 * /sampleroute:
 *   get:
 *     summary: Test Route 1
 *     description: This is a testing route to check the development server setup
*/
router.get("/", SampleController.all);

/**
 * @swagger
 * /sampleroute/:id:
 *   get:
 *     summary: Test Route 2
 *     description: This is a testing route to check the development server setup
*/
router.get('/:id', SampleController.byId);

/**
 * @swagger
 * /sampleroute:
 *   post:
 *     summary: Test Route 3
 *     description: This is a testing route to check the development server setup
*/
router.post('/',SampleController.create);

/**
 * @swagger
 * /sampleroute/:id:
 *   put:
 *     summary: Test Route 4
 *     description: This is a testing route to check the development server setup
*/
router.put('/:id',SampleController.update);

/**
 * @swagger
 * /sampleroute/:id:
 *   delete:
 *     summary: Test Route 5
 *     description: This is a testing route to check the development server setup
*/
router.delete('/:id',SampleController.remove);

module.exports = router;    