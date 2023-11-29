import React, { useState } from "react";
import "./fluidchart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useFluidContext } from "../../Context/fluidContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Foodchart = () => {
    const [inputs, setInputs] = useState([{food:"", quantity:""}]);
    const handleAddInput = () => {
        setInputs([...inputs, { food:"", quantity:"" }]);
      };
      const handleChange = (event, index) => {
         
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
      };
      const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
      };  

      const handleFoodsubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);
      }

  return (
    <div className="resident-context">
      <div>
        <h4>Daily Food Reading chart</h4>
      </div>
      <div className="fluid-section" style={{paddingLeft:"1rem"}}>
        <form onSubmit={handleFoodsubmit}>
          <div className="foodinput-div">
            <label className="label">Food Type</label>
            <select>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Teatime</option>
            <option>Dinner</option>
            <option>Other</option>
            </select>
          </div>

          <label className="label">Food Type</label>
          <div className="food-typediv">
         
          {inputs.map((item, index) => (

            <div className="foodinput-div" key={index}>
             <input
               name="food"
               type="text"
               placeholder="food name"
               value={item.food}
               onChange={(event) => handleChange(event, index)}
             />
             <input
             name="quantity"
             type="text"
             placeholder="serving size"
             value={item.quantity}
             onChange={(event) => handleChange(event, index)}
           />
             {inputs.length > 1 && (
               <button onClick={() => handleDeleteInput(index)} className="btn btn-del">Delete</button>
             )}
             {index === inputs.length - 1 && (
               <button onClick={() => handleAddInput()} className=" btn btn-add">Add</button>
             )}
           </div>
         ))}</div>
   
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

export default Foodchart;
