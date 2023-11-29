const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema(
  {
    photo: {
    type: String,
  },
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    dateofbirth: {
        type: Date,
        required: [true, "Date of birth is required."],
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, "resident block address."],
      },
      fluidschart: 
        [{
          fluidchart:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "PateintFluid",
        }}]

  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Pateint", PatientSchema);