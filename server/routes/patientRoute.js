const express = require('express');
const { getAllPatient, AddPatient, getPatientBycategory, getPatientDetailById } = require('../controllers/patientController');
const router = express.Router();

router.route("/").get(getAllPatient);
router.route("/block").get(getPatientBycategory);
router.route("/add").post(AddPatient);
router.route("/:id").get(getPatientDetailById)


module.exports = router;