const mongoose = require('mongoose');

const URI = 'mongodb://localhost/proyectoProductos';
// mongodb://localhost:27017/contacts
// const URI = '//mongodb://username:password@host:port/database';
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;