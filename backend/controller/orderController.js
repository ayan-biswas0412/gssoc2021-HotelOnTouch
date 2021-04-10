const orderModel=require("../model/orderModel")
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const { unsubscribe } = require("../route");
const secret_key = process.env.JWT_SECRET || secret_key_for_jwt_token;
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
        var user_id;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.split(' ')[1],
                decoded;
            try {
                decoded = jwt.verify(authorization, secret_key);
                user_id=decoded.user_id
            } catch (e) {
                return res.status(401).send('unauthorized');
            }
            
        }
        if(req.body!=null)
        {
            req.body.customer=user_id;
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
        var user_id;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.split(' ')[1],
                decoded;
            try {
                decoded = jwt.verify(authorization, secret_key);
                user_id=decoded.user_id
            } catch (e) {
                return res.status(401).send('unauthorized');
            }
            
        }
        orderModel.find({'customer':user_id})
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
        var user_id;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.split(' ')[1],
                decoded;
            try {
                decoded = jwt.verify(authorization, secret_key);
                user_id=decoded.user_id
            } catch (e) {
                return res.status(401).send('unauthorized');
            }
            
        }
          const dishes=req.body.dishes
          orderModel.findByIdAndUpdate(unsubscribe,{
              'dishes':[...dishes]
          })
          .then((order)=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            res.json(order);
          })  
          .catch(err => {
            res.send(err)
        });
    }
    ,
    deleteOrder(req,res){
        var user_id;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.split(' ')[1],
                decoded;
            try {
                decoded = jwt.verify(authorization, secret_key);
                user_id=decoded.user_id
            } catch (e) {
                return res.status(401).send('unauthorized');
            }
            
        }
        orderModel.findByIdAndRemove(user_id)
        .then(order => {
            res.send(order)
        })
        .catch(err => {
            res.send(err)
        });
    }

    

}

module.exports = orderController;