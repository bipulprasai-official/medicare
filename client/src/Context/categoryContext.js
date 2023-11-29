import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/categoryReducer";

const API = "http://localhost:4500/api";
const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  ispatientLoading: false,
  filterPatient:[],
  category:[],

};

const CategoryProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getCategory = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const mainCategory = await res.data;
      dispatch({ type: "CATEGORY_LIST", payload: mainCategory });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };


  useEffect(() => {
    getCategory(`${API}/category/`);
  }, []);
  return (
    <AppContext.Provider value={{ ...state}}>{children}</AppContext.Provider>
  );
};

// custom hook
const useCategoryContext = () => {
  return useContext(AppContext);
};
export { CategoryProvider, AppContext, useCategoryContext };
