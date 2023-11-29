import React, { useState } from "react";
import "./fluidchart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useFluidContext } from "../../Context/fluidContext";
import { useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const Fluidchart = () => {
  const {   addFluidTopatient } = useFluidContext();
  const {patientId} = useParams();
  // input
  const [fluids, setInputs] = useState([{fluidname:"", fluidquantity:"",fluidtakentime:""}]);
  const handleAddInput = () => {
      setInputs(...fluids, { fluidname:"", fluidquantity:"",fluidtakentime:""});
    };

    const handleDeleteInput = (index) => {
      const newArray = [...fluids];
      newArray.splice(index, 1);
      setInputs(newArray);
    };  


    const handleChange = (event, index) => {   
      let { name, value } = event.target;
      let onChangeValue = [...fluids];
      onChangeValue[index][name] = value;
      setInputs(onChangeValue);
    };
    const handleInputFluidsubmit = (event) =>{
      event.preventDefault();
      //  console.log(JSON.stringify(fluids))
     addFluidTopatient(JSON.stringify(fluids),patientId)

    }


  // out put function

  // const handleoutputamount = (e) => {};
  // const handleoutputtype = (e) => {};
  return (
    <div className="resident-context">
      <div>
        <h4>Daily Fluid Reading chart</h4>
      </div>
      <div className="fluid-section">
      <form onSubmit={handleInputFluidsubmit}>
      {fluids.map((item, index) => (

        <div className="foodinput-div" key={index}>
         <input
           name="fluidname"
           type="text"
           placeholder="Water / juice / other"
           value={item.fluidname}
           onChange={(event) => handleChange(event, index)}
         />
         <input
         name="fluidquantity"
         type="number"
         placeholder="serving size"
         value={item.fluidquantity}
         onChange={(event) => handleChange(event, index)}
       />
       <input
       name="fluidtakentime"
       type="time"
       placeholder="serving size"
       value={item.fluidtakentime}
       onChange={(event) => handleChange(event, index)}
     />
         {fluids.length > 1 && (
           <button onClick={() => handleDeleteInput(index)} className="btn btn-del">Delete</button>
         )}
         {index === fluids.length - 1 && (
           <button onClick={() => handleAddInput()} className=" btn btn-add">Add</button>
         )}
       </div>
     ))}

      <input type="submit" className="submit-btn" value="Add Intake Reading" />
    </form>
      </div>
      <div className="fluid-data-section">
        <div className="lastreading-tag">
          <div className="last-reading-intake">
            <p>
              <b>Last intake reading:</b> Juice 120ml @ 12:00{" "}
            </p>
          </div>
          <div className="last-reading-output">
            <p>
              <b>Last output reading:</b> urine 500ml @ 12:00{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fluidchart;
