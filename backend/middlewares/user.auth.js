const jwt = require("jsonwebtoken");
const { Staff, Customer } = require("../models/user.model");

const UserAuthenticationMiddleware = async (req, res, next) => {
    let token = req.header("Authorization");

    if (!token) {
        return res.status(400).json({ message: "Authentication Header Not Found" });
    }

    token = token.split(" ")[1];

    try {
        let decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "jwtsupersecretkeyremembertohide"
        );

        if (!decoded)
            return res.status(400).json({ message: "Expired or Invalid token" });
        
        let user_type;
        let user = await Staff.findOne({ email: decoded.email });
        
        if(!user) {
            user = await Customer.findOne({ email: decoded.email });
        } else {
            user_type = user.type;
        }

        if (!user) {
            return res.status(401).json({ message: "Invalid User" });
        } else {
            if (!user_type) user_type = "customer";
        }
        // ATTACH USER TO BODY
        req.body.email = decoded.email;
        // console.log("Authenicated Token - " + decoded.user_id);
        req.body.user_id = decoded.user_id;
        req.body.type = user_type || false;
        
        next();
    } catch (error) {
        return res.status(500).json({ message: "Failed verifying Token", error });
    }
};

module.exports = UserAuthenticationMiddleware;