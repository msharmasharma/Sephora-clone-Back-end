const express = require("express");
const Product = require("../model/product.model");
const router = express.Router();
const authenticate = require("../middleware/auth");

router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    res.send(product);
   
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/ascend", async (req, res) => {
  try {
    const product = await Product.find()
      .sort(
        { price: 1},
       
      )
      .lean()
      .exec();
    res.send(product);
  } catch (err) {
    res.send(err.message);
  }
});


router.get("/descend", async (req, res) => {
    try {
      const product = await Product.find()
        .sort(
          { price: -1},
         
        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });



  router.get("/sortOne", async (req, res) => {
    try {
      const product = await Product.find({$and:[{price:{$gte:1500}},{price:{$lte:2000}}]})
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });



  router.get("/auth",authenticate,async (req, res)=>{
    try{
      const product = await Product.find().lean().exec();
      res.send(product);
    }catch (err) {
      res.send(err.message);
    }
  })




  router.get("/below1499", async (req, res) => {
    try {
      const product = await Product.find({price : {$lte :1499}})
        .sort(
          { price: 1},

        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });

  router.get("/1500to1999", async (req, res) => {
    try {
      const product = await Product.find({$and:[{ price : {$gte :1500}},{price : {$lte : 1999}}]})
        .sort(
          { price: 1},

        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });

  router.get("/2000to2499", async (req, res) => {
    try {
      const product = await Product.find({$and:[{ price : {$gte :2000}},{price : {$lte : 2499}}]})
        .sort(
          { price: 1},

        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });

  router.get("/above2500", async (req, res) => {
    try {
      const product = await Product.find({price : {$gte :2500}})
        .sort(
          { price: 1},

        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });
  


  router.get("/aveda", async (req, res) => {
    try {
      const product = await Product.find({"title": "AVEDA"})
        .sort(
          { price: 1},
         
        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });

  
  router.get("/moroccanoil", async (req, res) => {
    try {
      const product = await Product.find({"title": "MOROCCANOIL"})
        .sort(
          { price: 1},
         
        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });

  //"title": "DYSON"

  router.get("/dyson", async (req, res) => {
    try {
      const product = await Product.find({"title": "DYSON"})
        .sort(
          { price: 1},
         
        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });


  router.get("/kamaAyurveda", async (req, res) => {
    try {
      const product = await Product.find({"title": "KAMA AYURVEDA"})
        .sort(
          { price: 1},
         
        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });

  
  router.get("/briogeo", async (req, res) => {
    try {
      const product = await Product.find({"title": "BRIOGEO"})
        .sort(
          { price: 1},
         
        )
        .lean()
        .exec();
      res.send(product);
    } catch (err) {
      res.send(err.message);
    }
  });


module.exports = router;
