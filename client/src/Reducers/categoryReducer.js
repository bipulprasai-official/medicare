
const CategoryReducer = (state,action) =>{
    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            }
            case "CATEGORY_LIST":
                return{
                    ...state,
                    isLoading:false,
                    category:action.payload
                }
            case "API_ERROR":
                return{
                    ...state,
                    isLoading:false,
                    isError:true,
                }   
                case "SET_PATIENT_LOADING":
                    return {
                      ...state,
                      ispatientLoading: true,
                    };
              
                  case "SET_PATIENT":
                    return {
                      ...state,
                      ispatientLoading: false,
                      filterPatient: action.payload,
                    };
              
                  case "SET_PATIENT_ERROR":
                    return {
                      ...state,
                      ispatientLoading: false,
                      isError: true,
                    };      
    
    }

}

export default CategoryReducer;