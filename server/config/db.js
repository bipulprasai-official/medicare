const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => console.log('connected to mongodb'))
    .catch(err => console.log(err))
}
module.exports = connectDB;