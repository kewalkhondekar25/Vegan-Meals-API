/*Vegan-Meals-API*/

const express = require('express');
const app = express();
const routes = require('./routes/route')
const connectDB = require('./db/connect')
require('dotenv').config()

//extra security package
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')

//middleware
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

//home route
app.get('/', (req, res) => {
    res.send('<h1>Vegan Meals API</h1>')
})

//category route
app.get('/api/v1/categories', (req, res)=>{
    res.status(201).json(["breakfast","soup", "salad", "drink", "main"])
})

//routes
app.use('/api/v1', routes)



const port = 8080;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server Is listening on ${port}...`));
    } catch (error) {
        console.log(error)
    }
}
start()




/*Vegan-Meals-API*/