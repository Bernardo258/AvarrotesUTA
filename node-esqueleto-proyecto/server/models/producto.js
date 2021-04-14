const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({

    nombre: {
        type: String,
        required: false
    },
    categoria: {
        type: String,
        required: false
    },
    empresa: {
        type: String,
        required: false
    },
    precio: {
        type: Number,
        required: false
    },
    carrito: {
        type: Boolean,
        required: false,
        default: false
    }

});

module.exports = mongoose.model('Producto', productoSchema);