import searchActionTypes from "../actiontypes/searchActionTypes";
import userAuthActionTypes from "../actiontypes/userAuthActionTypes";

const rootReducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case searchActionTypes.SET_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    case userAuthActionTypes.SIGN_IN_USER: {
      return {
        ...state,
        authDetails: action.payload,
      };
    }
    case userAuthActionTypes.SIGN_OUT_USER: {
      return {
        ...state,
        authDetails: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
