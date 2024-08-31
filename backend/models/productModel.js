import mongoose from "mongoose";

const productShema = new mongoose.Schema ({
    category:{
        type: String,
        require: true,
        trim: true //quita los espacios en blanco del principio y del final
    },
    title:{
        type: String,
        require: true,
        trim: true //quita los espacios en blanco del principio y del final
    },
    description:{
        type: String,
        require: true,
        trim: true //quita los espacios en blanco del principio y del final
    },
    price:{
        type: Number,
        min: 0,
        require: true,
    },
    colors:{
        type: [String],
        default: []
    },
    image:{
        public_id: String,
        secure_url: String
    },
})

const ProductModel = mongoose.model('products', productShema)
export default ProductModel