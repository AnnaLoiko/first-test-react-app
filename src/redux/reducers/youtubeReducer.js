const initialState = {
  items: [],
  currentId: 0,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_VIDEO_SUCCESS":
      console.log("CREATE_VIDEO_SUCCESS", state);
      return {
        ...state,
        items: action.payload
      }

    case "FETCH_USERS_ERROR":
      return state;


    case 'CREATE_VIDEO':
      console.log("000000000000000 CREATE_VIDEO", state);
      console.log("000000000000000 action.payload", action.payload);
      const currentId = action.payload;
      return {
        ...state,
        currentId: currentId
      }
    
    default:
      return state;
  }
}