/*Vegan-Meals-API*/


//connectionString

const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB


/*Vegan-Meals-API*/