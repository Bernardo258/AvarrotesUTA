const productoModel = require('../models/producto');
const productoCtrl = {};
const mongoose = require('mongoose')


productoCtrl.getProducto = async(req, res) => {
    const producto = await productoModel.find();
    res.json(producto);
};


productoCtrl.createProducto = async(req, res) => {
    console.log(req.body);
    const newProducto = new productoModel({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        empresa: req.body.empresa,
        precio: req.body.precio,
    });
    await newProducto.save();
    res.json({
        'status': 'Product saved'
    });
};

// productoCtrl.getProducto2 = async (req,res) => {
//     const find = await producto.findById(req.params.id);
//     res.json(find);
// };

productoCtrl.editEmployee = async(req, res) => {
    const id = mongoose.mongo.ObjectId(req.body._id)
    const newProducto = {
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            empresa: req.body.empresa,
            precio: req.body.precio
        }
        //(id, objeto nuevo, si no existe, crealo)
    await productoModel.findByIdAndUpdate(id, { $set: newProducto }, { new: true });
    res.json({
        status: 'Employee update'
    });
};

productoCtrl.deleteEmployee = async(req, res) => {
    const id = mongoose.mongo.ObjectId(req.body.id)
    await productoModel.findByIdAndRemove(id);
    res.json({
        status: 'Employee deleted'
    });
};

module.exports = productoCtrl;