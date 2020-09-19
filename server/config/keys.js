const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Ecommerce',
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("Database Connected")
});
module.exports = db