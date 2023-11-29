const patientModel = require("../models/patientModel");

const progressnoteModel = require("../models/progressnoteModel");
const AddNotes = async (req, res) => {
  const patient = await patientModel.findById(req.body.patient);
  if (!patient) return res.status(400).send("No resident Match found.");

  let residentnote = new progressnoteModel({
    notes: req.body.notes,
    patient: req.body.patient,
  });

  residentnote = await residentnote.save();

  if (!residentnote) return res.status(500).send("The product cannot be created");

  res.send(residentnote);
};

const getNotesByPatient = async (req, res) => {
    let filterNotes = {};
    if(req.query.patient){
      filterNotes = {patient:req.query.patient.split(',')}
    }
  const noteList = await progressnoteModel.find(filterNotes).populate('patient');
  if(!noteList){
    return res.status(404).send('No notes found for this residents')
  }
  res.send(noteList);
  };
  

module.exports = {
  AddNotes,
  getNotesByPatient
};
