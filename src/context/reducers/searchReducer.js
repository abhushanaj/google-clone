import searchActionTypes from "../actiontypes/searchActionTypes";

const searchReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case searchActionTypes.SET_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
