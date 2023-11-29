const mongoose = require("mongoose");

const ProgressnoteSchema = new mongoose.Schema(
  {
    notes: {
    type: String,
  }, 
patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pateint',
        required:true,
      },

  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Progressnote",ProgressnoteSchema);