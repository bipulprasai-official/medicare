const NoteReducer = (state,action) =>{
    switch (action.type) {
  
                case "ADD_FLUID_LOADING":
                    return {
                      ...state,
                      isfluidLoading: true,
                    };
              
                  case "ADD_FLUID":
                    return {
                      ...state,
                      isfluidLoading: false,
                     fluid: action.payload,
                    };
              
                  case "ADD_FLUID_ERROR":
                    return {
                      ...state,
                      isfluidLoading: false,
                      isError: true,
                    };   
                                   
    }

}

export default NoteReducer;