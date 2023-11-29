const express = require('express');
const { getAllCategories, AddCategory } = require('../controllers/categoryController');
const router = express.Router();

router.route("/").get(getAllCategories);
router.route("/add").post(AddCategory)


module.exports = router;