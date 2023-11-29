const patientModel = require("../models/patientModel");
const categoryModel = require("../models/categoryModel");
const AddPatient = async (req, res) => {
  const category = await categoryModel.findById(req.body.category);
  if(!category) return res.status(400).send("No residental address Match found.");

 let resident = new patientModel({
   name: req.body.name,
   photo:req.body.photo,
   dateofbirth:req.body.dateofbirth,
   category: req.body.category
 })

 resident = await resident.save();

 if(!resident) 
 return res.status(500).send('The product cannot be created')

 res.send(resident);
};

const getAllPatient = async (req, res) => {
  patientModel.find({}).exec((error, patients) => {
    if (error) return res.status(error).json({ error });
    if (patients) {
      return res.status(200).json({ patients });
    }
  });
};

const getPatientBycategory = async (req, res) => {
  let filterCategory = {};
  if(req.query.categories){
    filterCategory = {category:req.query.categories.split(',')}
  }
const residentList = await patientModel.find(filterCategory).populate('category');
if(!residentList){
  return res.status(404).send('No residents list found under this block')
}
res.send(residentList);
};

const getPatientDetailById = async (req, res) => {
  try {
    const {id} = req.params;
    const resident = await patientModel.findById(id)
     res.status(200).json(resident)
    
  } catch (error) {
    res.status(500).send('No residents list found under this block')
  }
};
module.exports = {
  AddPatient,
  getAllPatient,
  getPatientBycategory,
  getPatientDetailById
};
