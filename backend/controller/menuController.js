const menuItemModel=require("../model/menuItemModel")
const mongoose = require('mongoose');
const menuItemController={

    allItems(req,res){
        menuItemModel.find({})
        .then((items)=>{
            res.send(items)
        })
        .catch(err => {
            res.send(err)
        });
    },

    createItem(req,res){
        if(req.body!=null)
        {
            menuItemModel.create(req.body)
            .then((item)=>{
                menuItemModel.findById(item._id)
                .then((item)=>{
                    res.statusCode=200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(item);
                })
            }
            , (err) => next(err))
            .catch((err) => next(err));
        }
        else {
            err = new Error('Item not found in request body');
            err.status = 404;
            return next(err);
        }
    }
    ,
    getItem(req,res){
        const dishId=req.params.dishId;
        menuItemModel.findById(dishId)
        .then((dish)=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish);
        })
        .catch(err => {
            res.send(err)
        });
    }
,

    updateItem(req,res){
          const dishprice=req.body.dishprice
          const dishId=req.params.dishId;
          menuItemModel.findByIdAndUpdate(dishId,{
             'dishprice':dishprice
          })
          .then((item)=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            res.json(item);
          })  
          .catch(err => {
            res.send(err)
        });
    }
    ,
    deleteItem(req,res){
        const idParam = req.params.dishId;
        menuItemModel.findByIdAndRemove(idParam)
        .then(item => {
            res.send(item)
        })
        .catch(err => {
            res.send(err)
        });
    }
,

    searchdishes(req,res){
        const dishname=req.params.dishexp;
        menuItemModel.find({'dishname':{$regex:dishname, $options: 'i'}})
        .then(items=>{
            res.statusCode=200;
            res.setHeader('Content-Type', 'application/json');
            res.json(items);
        })
        .catch(err => {
            res.send(err)
        });

    }
    

}

module.exports = menuItemController;