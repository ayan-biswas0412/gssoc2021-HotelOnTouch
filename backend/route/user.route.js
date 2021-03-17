const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

/* Common Routes */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Registration of new users as employee or customer
 *     description: Customers as well as employees will have the option to register themselves to the platform
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: String
 *                 description: User type to be either **customer** or **employee** only.
 *                 example: employee
 *               name:
 *                 type: String
 *                 description: The user's name
 *                 example: Joe Smith
 *               phone:
 *                 type: String
 *                 description: User's phone number, regex to be used for verifying in frontend
 *                 example: 9988999700
 *               email:
 *                 type: String
 *                 description: The user's email, regex to be used in frontend to verify the format
 *                 example: joe@smith.com
 *               password:
 *                 type: String
 *                 description: The user's password of atleast 6 letters
 *                 example: 1847asdA}.
 *     responses:
 *       201:
 *         description: User creation success response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: String
 *                   description: Success message for user creation
 *                   example: New Staff Created
 *                 user:
 *                   type: Object
 *                   description: The newly created user document as json
*/
router.post("/register", userController.Register);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Route for all users to login
 *     description: Assuming the frontend will have separate logins for staff and customers, login route makes use of type parameter to be passed in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: String
 *                 description: either **customer** or **admin** or **employee**
 *                 example: employee
 *               email:
 *                 type: String
 *                 description: User's registered email
 *                 example: joe@smith.com
 *               password:
 *                 type: String
 *                 description: User's password
 *                 example: 1847asdA}.
 *     responses:
 *       200:
 *         description: User login success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: String
 *                   description: Success message for user creation
 *                   example: User logged in
 *                 jwt_token:
 *                   type: String
 *                   description: jwt token to be saved in client side
 *                 user:
 *                   type: Object
 *                   description: The newly created user document as json
*/
router.post("/login", userController.Login);

/**
 * @swagger
 * /user/profile:
 *   post:
 *     summary: Get details of any particular user
 *     description: Sending **either** email or phone or id of user will work
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: String
 *                 description: either **customer** or **admin** or **employee**
 *                 example: employee
 *               email:
 *                 type: String
 *                 description: User's registered email
 *                 example: joe@smith.com
 *               phone:
 *                 type: String
 *                 description: User's phone number
 *                 example: 984782531
 *               user_id:
 *                 type: String
 *                 description: User's ID
 *                 example: 5099803df3f4948bd2f98391
 *     responses:
 *       200:
 *         description: User fetch success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: String
 *                   description: Success message for user fetching
 *                   example: Customer Fetched Successfully
 *                 user:
 *                   type: Object
 *                   description: The newly created user document as json
*/
router.post("/profile", userController.FetchUserByID);

/* Customer Routes*/

/**
 * @swagger
 * /user/customers:
 *   get:
 *     summary: Get List of all customers
 *     description: Fetch all documents of all registered customers
 *     responses:
 *       200:
 *         description: A list of customers.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: String
 *                   description: Success message for customers fetching
 *                   example: Customers Fetched Successfully 
 *                 customers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: Customer documents from mongo db
*/
router.get("/customers", userController.FetchAllCustomers);

/* Staff Routes*/

/**
 * @swagger
 * /user/staff:
 *   get:
 *     summary: Get List of all staff
 *     description: Fetch all documents of all registered staff
 *     responses:
 *       200:
 *         description: A list of staff.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: String
 *                   description: Success message for staff fetching
 *                   example: Staff Fetched Successfully 
 *                 staff:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: Customer documents from mongo db
*/
router.get("/staff", userController.FetchAllStaff);

module.exports = router;