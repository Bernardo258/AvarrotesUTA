const express = require('express');
const router = express.Router();

const productoCtrl = require('../controllers/producto.controller');

router.get('/', productoCtrl.getProducto);

router.post('/', productoCtrl.createProducto);

router.post('/edit', productoCtrl.editEmployee);

router.post('/delete', productoCtrl.deleteEmployee);

module.exports = router;