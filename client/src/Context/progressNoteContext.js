import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/noteReducer";

const API = "http://localhost:4500/api";
const AppContext = createContext();

const initialState = {
  isError: false,
  isnotesLoading: false,
  notes:[],

};

const NotesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getNoteByPatient = async (patientId) => {
    dispatch({ type: "SET_NOTES_LOADING" });
    try {   
      const res = await axios.get(`${API}/notes/written?patient=${patientId}`);
      const notes = await res.data.reverse();
    //  console.log(notes)
      dispatch({ type: "SET_NOTES", payload: notes });
    } catch (error) {
      dispatch({ type: "SET_NOTES_ERROR" });
    }
  };

  const addNotesTopatient = async (data) => {
    dispatch({ type: "ADD_NOTES_LOADING" });
    try {  

      const res = await axios.post(`${API}/notes/add`,data);
      const notes = await res.data;
     console.log(notes)
      dispatch({ type: "ADD_NOTES", payload:notes});
    } catch (error) {
      dispatch({ type: "ADD_NOTES_ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ ...state,getNoteByPatient,addNotesTopatient}}>{children}</AppContext.Provider>
  );
};

// custom hook
const useNotesContext = () => {
  return useContext(AppContext);
};
export { NotesProvider, AppContext, useNotesContext };
