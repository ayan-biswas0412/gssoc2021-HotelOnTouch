const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Service Schema ... To store services offered by the hotel
const serviceSchema = new Schema(
    {
        // To store the creator of the service
        added_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Staff",
        },
        // To store the name of the service
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// LiveService Schema ... Stores service requests created by various customers for tracking
const liveServiceSchema = new Schema(
    {
        // To Store the customer who requested the service
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
        },
        // To store what service has been requested
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
        },
        // To store which employee has been assigned to complete the service
        assignee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Staff",
        },
        // Optional parameter if the service is given a deadline or a future date
        scheduled_time: {
            type: String,
            default: null,
        },
        // To store the status like live, complete, upcoming etc
        status: {
            type: String,
            default: "live",
        },
    },
    {
        timestamps: true,
    }
);

let Service = mongoose.model("Service", serviceSchema);
let LiveService = mongoose.model("LiveService", liveServiceSchema);

module.exports = {
    Service,
    LiveService,
};
