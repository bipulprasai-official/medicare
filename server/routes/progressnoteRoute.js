const express = require('express');
const { AddNotes, getNotesByPatient } = require('../controllers/progressnoteController');
const router = express.Router();

// router.route("/").get(getAllPatient);
router.route("/add").post(AddNotes);
router.route("/written").get(getNotesByPatient);




module.exports = router;