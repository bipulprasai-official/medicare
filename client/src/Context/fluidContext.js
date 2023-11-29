import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/fluidReducer";

const API = "http://localhost:4500/api";
const AppContext = createContext();

const initialState = {
  isError: false,
  isfluidLoading: false,
  fluids:[],

};

const FluidProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

//   const getNoteByPatient = async (patientId) => {
//     dispatch({ type: "SET_NOTES_LOADING" });
//     try {   
//       const res = await axios.get(`${API}/notes/written?patient=${patientId}`);
//       const notes = await res.data.reverse();
//     //  console.log(notes)
//       dispatch({ type: "SET_NOTES", payload: notes });
//     } catch (error) {
//       dispatch({ type: "SET_NOTES_ERROR" });
//     }
//   };

  const addFluidTopatient = async (fluids,patientId) => {
    dispatch({ type: "ADD_FLUID_LOADING" });
    try {  
      //  console.log(fluids,patientId);
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
       }
      }
      const data = await axios.put(`${API}/fluidchart/takenfluid/${patientId}`,fluids,);
      console.log(data.data)


      const fluid = await data.data;
     console.log(fluid)
      dispatch({ type: "ADD_NOTES", payload:fluid});
    } catch (error) {
      dispatch({ type: "ADD_FLUID_ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ ...state,addFluidTopatient}}>{children}</AppContext.Provider>
  );
};

// custom hook
const useFluidContext = () => {
  return useContext(AppContext);
};
export { FluidProvider, AppContext, useFluidContext };
