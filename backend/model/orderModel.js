const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema=new Schema({

    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        required: true
    },
    dishes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MenuItem",
        required:true
    }]

},{
        timestamps: true,
    })

 let Order = mongoose.model("Order", orderSchema);

 module.exports = Order; 