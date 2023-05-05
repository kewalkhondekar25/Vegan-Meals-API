/*Vegan-Meals-API*/

//mongoose-schemas
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    category: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Meal', TaskSchema)

/*Vegan-Meals-API*/