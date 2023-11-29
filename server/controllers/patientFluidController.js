const patientfluidModel = require("../models/patientfluidModel");
const patientModel = require("../models/patientModel");

const AddPatientFluid = async (req, res) => {
  // check if user is already in fluid chart
  const { totalfluidtobetaken } = req.body;
  const patient = await patientfluidModel.findOne({
    patient: req.params.userId,
  });
  if (patient) return res.status(400).send("user already there.");

  const newfluidchart = new patientfluidModel({
    patient: req.params.userId,
    totalfluidtobetaken: totalfluidtobetaken,
  });

  // adding total fluid to array
  newfluidchart.fluids.push({ fluidavailable: totalfluidtobetaken });
  const fluidchart = await newfluidchart.save();

  // adding fluidchart to user model
  const newPatient = await patientModel.findById(req.params.userId);
  newPatient.fluidschart.push({ fluidchart: fluidchart.id });
  await newPatient.save();

  res.status(200).json(fluidchart);
};

const AddDailyFluidchart = async (req, res) => {
  // check if user is already in fluid chart
const bodycontent = req.body
  const newfluid = await patientfluidModel.findOneAndUpdate(
    {
      patient: req.params.userId,
    },
    {
      $push: {
        fluids: {
          $each: [...req.body],
        },
      },
    },
    { new: true }
  );

  res.status(200).json(newfluid);
};
module.exports = {
  AddPatientFluid,
  AddDailyFluidchart,
};
