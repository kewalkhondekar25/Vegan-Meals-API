/*Vegan-Meals-API*/

//controller functions
const Meal = require('../model/model')

//to fetch all meals and quering title including regex to incorporate caseinsentivity, pluralize, sorting by title and price.
//[GET]
const getAllMeals = async (req, res) => {
    const { title, AtoZ, ZtoA, HtoL, LtoH } = req.query
    const queryObj = {}

    /*quering regex s; e's*/
    if (title) {
        queryObj.title = { $regex: title.replace(/(?:es|[sx])$/, ''), $options: 'i' }
    }

    /*sorting*/
    try {
        let result = Meal.find(queryObj)
        if (AtoZ) {
            result = result.sort(AtoZ)
        }
        if (ZtoA) {
            result = result.sort(ZtoA)
        }
        if (HtoL) {
            result = result.sort(HtoL)
        }
        if (LtoH) {
            result = result.sort(LtoH)
        }
        const meal = await result
        res.status(201).json(meal)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//to fetch breakfast meals
const getBreakfastMeal = async (req, res) => {
    try {
        const meal = await Meal.find({ category: 'breakfast' })
        res.status(201).json(meal)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//to fetch soup meals
const getSouptMeal = async (req, res) => {
    try {
        const meal = await Meal.find({ category: 'soup' })
        res.status(201).json(meal)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//to fetch salad meals
const getSaladMeal = async (req, res) => {
    try {
        const meal = await Meal.find({ category: 'salad' })
        res.status(201).json(meal)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//to fetch drink meals
const getDrinkMeal = async (req, res) => {
    try {
        const meal = await Meal.find({ category: 'drink' })
        res.status(201).json(meal)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//to fetch main meals
const getMainMeal = async (req, res) => {
    try {
        const meal = await Meal.find({ category: 'main' })
        res.status(201).json(meal)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}



/*to create new meals [POST]
const createMeals = async (req, res) => {
    try {
        const meal = await Meal.create(req.body)
        res.status(201).json(meal)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
*/

module.exports = { getAllMeals, /*createMeals*/ getBreakfastMeal, getSouptMeal, getSaladMeal, getDrinkMeal, getMainMeal }


/*Vegan-Meals-API*/