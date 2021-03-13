const { Staff, Customer } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// JWT Configuration
const secret_key = process.env.JWT_SECRET || secret_key_for_jwt_token;
const expiry_length = 21 * 86400;
const jwt_headers = {
    algorithm: "HS256",
    expiresIn: expiry_length,
};

const Register = async(req, res) => {
    try {
        // If request is from customer end
        if (req.body.type == "customer") {
            if (!! await Customer.findOne({ $or: [{email: req.body.email}, {phone: req.body.phone}]})) {
                return res.status(400).json({
                    "message": "Email or Phone Number already registered"
                });
            }
            const customer = await Customer.create(req.body);
            return res.status(201).json({
                "message": "New Customer Created",
                "user": customer
            });
        } 
        
        // If request is from employee end
        else if (req.body.type == "employee") {
            if (!! await Staff.findOne({ $or: [{email: req.body.email}, {phone: req.body.phone}]})) {
                return res.status(400).json({
                    "message": "Email or Phone Number already registered"
                });
            }
            const staff = await Staff.create(req.body);
            return res.status(201).json({
                "message": "New Staff Created",
                "user": staff
            });
        } 
        
        // Invalid User type
        else {
            return res.status(400).json({
                "message": "Invalid User Type"
            });
        }
    } catch (err) {
        return res.status(500).json({
            "message": "Internal Server Error",
            "error": err
        });
    }
};

const Login = async(req, res) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.type) {
            return res.status(400).json({
                "message": "Invalid Inputs",
                "error": "email or password or type not provided"
            });
        }

        let user;
        
        // Find if email exists
        if (type == "customer") {
            user = await Customer.findOne({ email: req.body.email });
        } else if (type == "employee" || type == "admin") {
            user = await Staff.findOne({ email: req.body.email });
        } else {
            return res.status(400).json({
                "message": "Invalid User Type"
            });
        }
        
        // If email found, match password
        if (user) {
            // Check for password mismatch
            if (await bcrypt.compare(password, user.password)) {
                const accessToken = jwt.sign(
                    { email: user.email, user_id: user._id },
                    secret_key,
                    jwt_headers
                );
                return res.status(200).json({
                    "message": "User logged in",
                    "jwt_token": accessToken,
                    "user": user
                });
            } else {
                return res.status(400).json({
                    "message": "Email or Password incorrect"
                });
            }
        } else {
            return res.status(400).json({
                "message": "Email or Password incorrect"
            });
        }
    } catch (err) {
        return res.status(500).json({
            "message": "Internal Server Error",
            "error": err
        });
    }
};

const FetchAllCustomers = async(req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json({
            "message": "Customers Fetched Successfully",
            "customers": customers
        });
    } catch (err) {
        return res.status(500).json({
            "message": "Internal Server Error",
            "error": err
        });
    }
};

const FetchAllStaff = async(req, res) => {
    try {
        const staff = await Staff.find();
        res.status(200).json({
            "message": "Staff Fetched Successfully",
            "staff": staff
        });
    } catch (err) {
        return res.status(500).json({
            "message": "Internal Server Error",
            "error": err
        });
    }
};

const FetchUserByID = async(req, res) => {
    try {
        if (req.body.type == "customer")
        {   
            const customer = await Customer.findOne({ $or: [{_id: req.body.user_id}, {email: req.body.email}, {phone: req.body.phone}]});

            if (customer) {
                res.status(200).json({
                    "message": "Customer Fetched Successfully",
                    "user": customer
                });
            } else {
                res.status(400).json({
                    "message": "User Not Found"
                });
            }

        } else {
            const staff = await Staff.findOne({ $or: [{_id: req.body.user_id}, {email: req.body.email}, {phone: req.body.phone}]});

            if (staff) {
                res.status(200).json({
                    "message": "Staff Fetched Successfully",
                    "user": staff
                });
            } else {
                res.status(400).json({
                    "message": "User Not Found"
                });
            }
        }
    } catch (err) {
        return res.status(500).json({
            "message": "Internal Server Error",
            "error": err
        });
    }
};

module.exports = {
    Register,
    Login,
    FetchAllCustomers,
    FetchAllStaff,
    FetchUserByID
};