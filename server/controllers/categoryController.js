const { default: slugify } = require("slugify");
const Category = require("../models/categoryModel");

function createSubCategoryList(categoryList, parentId = null) {
  const categoryLists = [];
  let category;
  if (parentId === null) {
    category = categoryList.filter((cat) => cat.parentId == undefined);
  } else {
    category = categoryList.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryLists.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      children: createSubCategoryList(categoryList, cate._id),
    });
  }
  return categoryLists;
}

const getAllCategories = async (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(error).json({ error });
    if (categories) {
      const categoryList = createSubCategoryList(categories);
      return res.status(200).json({ categoryList });
    }
  });
};

const AddCategory = async (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = await new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(error).json({ error });
    if (category) {
      return res.status(200).json({ category });
    }
  });
};

module.exports = {
  AddCategory,
  getAllCategories,
};