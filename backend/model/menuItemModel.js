const mongoose = require("mongoose");
const Schema = mongoose.Schema;




    const menuItemSchema=new Schema({
        dishname:{
            type:String,
            required:true
        },
        dishprice:{
            type:String,
            required:true
        }
    },{
        timestamps: true,
    })

let MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports =MenuItem;