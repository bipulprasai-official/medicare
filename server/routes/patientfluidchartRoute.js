const express = require('express');
const { AddPatientFluid, AddDailyFluidchart } = require('../controllers/patientFluidController');
const router = express.Router();

router.route("/:userId").post(AddPatientFluid);
router.route("/takenfluid/:userId").put(AddDailyFluidchart)



module.exports = router;