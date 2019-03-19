const initialState = {
    items: [],
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "FETCH_CURRENCY_SUCCESS":
        return {
          ...state,
          items: action.payload
        }
  
      case "FETCH_CURRENCY_ERROR":
        return state;
  
      
  
      default:
        return state;
    }
  }