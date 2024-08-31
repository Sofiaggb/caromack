import { json } from "express";
import ProductModel from "../models/productModel.js";

const controllers = {

    getProducts: async(req, res) => {
        try {
            const products = await ProductModel.find();

            if (!products) return res.status(404).json({
                message: "No hay productos en existencia"
             });

            res.status(200).json(products)

        } catch (error) {
            return res.status(500).send({
                message: error.message
            })
        }
    },

    getProduct: async(req, res) => {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id);

            if (!product) return res.status(404).json({
                message: "Producto no encontrado"
            });

           res.status(200).json(product)

        } catch (error) {
            return res.status(500).send({
                message: error.message
            })
        }

    },

    search: async(req, res) => {
        try {
            const value = req.params.search;

            const serch = await ProductModel.find({
                
            })
        } catch (error) {
            return res.status(500).send({
                message: error.message
            })
        }
    },

    save: async(req, res) => {
        try {
            const {category, title, description, price, colors} = req.body;

        const product = new ProductModel({
            category, 
            title, 
            description, 
            price,
            colors
        });

        await product.save();
        res.status(200).json(product);

        } catch (error) {
            return res.status(500).send({
                message: error.message
            })
        }
    },

    update: async(req, res) => {
        try {
            const id = req.params.id;
            const {category, title, description, price, colors} = req.body;

            // const product = await ProductModel.findById(id)
            const updates = {
                category, 
                title, 
                description, 
                price,
                colors
            };

            const productUpdate = await ProductModel.findByIdAndUpdate(id, updates, {new: true});

            if (!productUpdate) return res.status(404).json({
                message: "Producto no encontrado"
            });
            
            res.status(200).json(productUpdate);

        } catch (error) {
            return res.status(500).send({
                message: error.message
            })
        }

    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const productDelete = await ProductModel.findByIdAndDelete(id);

            if (!productDelete) return res.status(404).json({
                message: "El producto no existe"
            });

            res.status(200).json(productDelete)

        } catch (error) {
            return res.status(500).send({
                message: error.message
            })
        }
    }
}

export default controllers;