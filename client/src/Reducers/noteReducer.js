
const NoteReducer = (state,action) =>{
    switch (action.type) {

      case "ADD_NOTES_LOADING":
        return {
          ...state,
          isnotesLoading: true,
        };
  
      case "ADD_NOTES":
        return {
          ...state,
        isnotesLoading: false,
         notes: action.payload,
        };
  
      case "ADD_NOTES_ERROR":
        return {
          ...state,
          isnotesLoading: false,
          isError: true,
        };  
                case "SET_NOTES_LOADING":
                    return {
                      ...state,
                      isnotesLoading: true,
                    };
              
                  case "SET_NOTES":
                    return {
                      ...state,
                      isnotesLoading: false,
                     notes: action.payload,
                    };
              
                  case "SET_NOTES_ERROR":
                    return {
                      ...state,
                      isnotesLoading: false,
                      isError: true,
                    };   
                                   
    }

}

export default NoteReducer;