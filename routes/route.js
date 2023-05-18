/*Vegan-Meals-API*/
const express = require('express');
const router = express.Router();
const { getAllMeals, getSingleMeal,  getBreakfastMeal,/*createMeals*/ getSouptMeal, getSaladMeal, getDrinkMeal, getMainMeal } = require('../controller/controller')


//router.route('/meals').get(getAllMeals).post(createMeals);
router.route('/meals').get(getAllMeals);
router.route('/categories/meals/:id').get(getSingleMeal);
router.route('/meals/breakfast').get(getBreakfastMeal);
router.route('/meals/soup').get(getSouptMeal);
router.route('/meals/salad').get(getSaladMeal);
router.route('/meals/drink').get(getDrinkMeal);
router.route('/meals/main').get(getMainMeal);


module.exports = router;



/*Vegan-Meals-API*/