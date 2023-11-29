
const PatientReducer = (state,action) =>{
    switch (action.type) {
                case "SET_PATIENT_LOADING":
                    return {
                      ...state,
                      ispatientLoading: true,
                    };
              
                  case "SET_PATIENT":
                    return {
                      ...state,
                      ispatientLoading: false,
                     patient: action.payload,
                    };
              
                  case "SET_PATIENT_ERROR":
                    return {
                      ...state,
                      ispatientLoading: false,
                      isError: true,
                    };   
                    
                    case "SET_SINGLEPATIENT_LOADING":
                    return {
                      ...state,
                      ispatientLoading: true,
                    };
              
                  case "SET_SINGLEPATIENT":
                    return {
                      ...state,
                      issinglepatientLoading: false,
                      singlepatient: action.payload,
                    };
              
                  case "SET_SINGLEPATIENT_ERROR":
                    return {
                      ...state,
                      issinglepatientLoading: false,
                      isError: true,
                    };   
                    
                    
    }

}

export default PatientReducer;