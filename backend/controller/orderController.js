const orderModel=require("../model/orderModel")
const mongoose = require('mongoose');
const orderController={

    allorders(req,res){
        orderModel.find({})
        .then((orders)=>{
            res.send(orders)
        })
        .catch(err => {
            res.send(err)
        });
    },

    createOrder(req,res){
        if(req.body!=null)
        {
            req.body.customer=req.user._id;
            orderModel.create(req.body)
            .then((order)=>{
                orderModel.findById(order._id)
                .populate([{
                    path:'customer',
                    model:"Customer"
                },{
                    path:"dishes",
                    model:"MenuItem"
                }])
                .then((order)=>{
                    res.statusCode=200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(order);
                })
            }
            , (err) => next(err))
            .catch((err) => next(err));
        }
        else {
            err = new Error('Order not found in request body');
            err.status = 404;
            return next(err);
        }
    }
    ,
    getOrderbyCustomer(req,res){
        const custopmerId=req.params,custopmerId;
        orderModel.find({'customer':custopmerId})
        .populate([{
            path:'customer',
            model:"Customer"
        },{
            path:"dishes",
            model:"MenuItem"
        }])
        .then((orders)=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            res.json(orders);
        })
        .catch(err => {
            res.send(err)
        });
    }
,

    updateOrder(req,res){
          const dishes=req.body.dishes
          const id=req.params.id;
          orderModel.findByIdAndUpdate(id,{
              'dishes':[...dishes]
          })
          .then((order)=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            res.json(orders);
          })  
          .catch(err => {
            res.send(err)
        });
    }
    ,
    deleteOrder(req,res){
        const idParam = req.params.id;
        orderModel.findByIdAndRemove(idParam)
        .then(order => {
            res.send(order)
        })
        .catch(err => {
            res.send(err)
        });
    }

    

}

module.exports = orderController;