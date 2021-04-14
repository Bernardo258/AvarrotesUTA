const express = require('express');
const router = express.Router();

const librosCtrl = require('../controllers/libros.controller');

router.get('/', librosCtrl.getLibros);

// router.post('/',userCtrl.createUser);

// router.get('/:id',userCtrl.getUser);

// router.put('/:id',userCtrl.editEmployee);

// router.delete('/:id',userCtrl.deleteEmployee);

module.exports = router;