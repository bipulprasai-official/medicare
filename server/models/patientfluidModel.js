const mongoose = require("mongoose");

const PatientFluidSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pateint",
      required: true,
    },
    totalfluidtobetaken: {
      type: String,
    },
    fluids: [
      {
        fluidavailable: {
          type: String,
          
        },
        fluidname: {
          type: String,
     
        },
        fluidquantity: {
          type: String,
          
        },
        fluidtakentime: {
          type: String,
          
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("PateintFluid", PatientFluidSchema);
