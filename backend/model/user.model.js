const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

// User Schema ... actual users of the application - admin & employees
const staffSchema = new Schema({
    // Type: admin or employee
    type: {
        type: String,
        default: "employee"
    },
    // Full Name
    name: {
        type: String,
        required: true
    },
    // Phone Number
    phone: {
        type: String,
        required: true,
        unique: true
    },
    // Email
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Password
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    // Store rewarded badges
    badges: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Badge'
    }],
    // On duty or off duty
    on_duty: {
        type: Boolean,
        default: false
    },
    // To store if the empoyee is linked to a particular service only e.g.: Chef
    service_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Service'
    },
    // User secret to be used in forgot password or account verification
    user_secret: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

// Customer Schema ... Customers are handled solely by admins
const customerSchema = new Schema({
    // Full Name
    name: {
        type: String,
        required: true
    },
    // Phone Number
    phone: {
        type: String,
        required: true,
        unique: true
    },
    // Email
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Password
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    // Other room occupants
    occupancy: {
        adults: {
            type: Number,
            default: 0
        },
        children: {
            type: Number,
            default: 0
        }
    },
    // Room number
    room_id: {
        type: String,
        default: null
    },
    // Type of Room: single, double etc
    room_type: {
        type: String,
        default: null
    },
    // Check in date-time
    check_in: {
        type: String,
        default: null
    },
    // Check out date-time
    check_out: {
        type: String,
        default: null
    },
    // Date-time of booking
    booking_time: {
        type: String,
        default: null
    },
    // Active, in-active, booked, waiting
    status: {
        type: String,
        default: "inactive"
    },
    // Amount to be paid
    balance: {
        type: String,
        default: null
    },
    // Paymeny Status
    has_paid: {
        type: Boolean,
        default: false
    },
    // User secret to be used in forgot password or account verification
    user_secret: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

// Hash the password on creation / edit
staffSchema.pre("save", async function (next) {
    if (!this.isModified || !this.isNew) {
        next();
    } else this.isModified("password");
    if (this.password)
        this.password = await bcrypt.hash(String(this.password), 12);
    next();
});

// Hash the password on creation / edit
customerSchema.pre("save", async function (next) {
    if (!this.isModified || !this.isNew) {
        next();
    } else this.isModified("password");
    if (this.password)
        this.password = await bcrypt.hash(String(this.password), 12);
    next();
});

let Customer = mongoose.model("Customer", customerSchema);
let Staff = mongoose.model("Staff", staffSchema);

module.exports = {
    Customer,
    Staff
}