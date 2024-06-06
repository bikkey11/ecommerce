const express = require("express");
const Model = require("../Models/productModel.js");
const app = express()

// to insert many
app.post("/add_hotProduct", async (req, res) => {
    const product = req.body.product
    try {
        await Model.WhatsHotModel.insertMany(product)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)

    }
})

// get single product by Id
app.get("/get_productbyId/:title",async(req,res)=>{
    console.log(req.params.title)
    try {
    const product=await Model.ProductModel.findOne({title:req.params.title})
    res.status(200).send(product)
    } catch (error) {
        res.status(404).send(error)
        
    }
})

// add all product
app.post("/add_product", async (req, res) => {
    const product = new Model.ProductModel(req.body)
    try {
        await product.save()
    } catch (error) {
        res.status(500).send(error)

    }
})

app.get("/get_allproduct", async (req, res) => {
    try {
        const products = await Model.ProductModel.find()
        res.status(200).send(products)


    } catch (error) {
        res.status(500).json(error)

    }
})

// add flashProduct only
app.post("/add_flashproduct", async (req, res) => {
    const product = new Model.FlashProductModel(req.body)
    try {
        await product.save()
    } catch (error) {
        res.status(500).send(error)

    }
})

app.get("/get_flashproduct", async (req, res) => {
    try {
        const flashProduct = await Model.FlashProductModel.find()
        res.status(200).send(flashProduct)


    } catch (error) {
        res.status(500).json(error)

    }
})

// add offerProduct only
app.post("/add_offerproduct", async (req, res) => {
    const product = new Model.OfferProductModel(req.body)
    try {
        await product.save()
    } catch (error) {
        res.status(500).send(error)

    }
})

app.get("/get_offerproduct", async (req, res) => {
    try {
        const offerProduct = await Model.OfferProductModel.find()
        res.status(200).send(offerProduct)


    } catch (error) {
        res.status(500).json(error)

    }
})

// add new arrival
app.post("/add_newArrival", async (req, res) => {
    const product = new Model.NewArrivalModel(req.body)
    try {
        await product.save()
    } catch (error) {
        res.status(500).send(error)

    }
})

app.get("/get_newproduct", async (req, res) => {
    try {
        const newProduct = await Model.NewArrivalModel.find()
        res.status(200).send(newProduct)


    } catch (error) {
        res.status(500).json(error)

    }
})


module.exports = app;