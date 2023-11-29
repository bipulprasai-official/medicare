import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/patientReducer";

const API = "http://localhost:4500/api";
const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  ispatientLoading: false,
  issinglepatientLoading: false,
  singlepatient:{},
  patient:[],

};

const PatientProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPatientByBlock = async (categoryId) => {
    dispatch({ type: "SET_PATIENT_LOADING" });
    try {   
      const res = await axios.get(`${API}/patient/block?categories=${categoryId}`);
      const patient = await res.data;
    //   console.log(patient)
      dispatch({ type: "SET_PATIENT", payload: patient });
    } catch (error) {
      dispatch({ type: "SET_PATIENT_ERROR" });
    }
  };

  const getSinglePatient = async (patientId) => {
    dispatch({ type: "SET_SINGLEPATIENT_LOADING" });
    try {   

      const res = await axios.get(`${API}/patient/${patientId}`);
      const singlepatient = await res.data;
      // console.log(singlepatient)
      dispatch({ type: "SET_SINGLEPATIENT", payload:singlepatient});
    } catch (error) {
      dispatch({ type: "SET_SINGLEPATIENT_ERROR" });
    }
  };


  return (
    <AppContext.Provider value={{ ...state,getPatientByBlock,getSinglePatient}}>{children}</AppContext.Provider>
  );
};

// custom hook
const usePatientContext = () => {
  return useContext(AppContext);
};
export { PatientProvider, AppContext, usePatientContext };
