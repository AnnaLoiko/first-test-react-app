const initialState = {
    items: [],
    count: 0,
    currentMemo: {
        id: '',
        note1: '',
        note2: '',
    },
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_MEMES_SUCCESS":
            const items = action.payload;
            const count = +action.payload2;
            let countMemes = items.data.memes.splice(0,count);
            return {
                items: countMemes,
            }
        

        case "POST_MESSAGES_SUCCESS":
            const { page_url , url } = action.payload.data;
            return {
                ...state,
                currentMemo: {
                    page_url: page_url,
                    url: url,
                },
            }
        

        case "WRITE_MEME_ID":
        console.log("--------action.payload2-------", action.payload2);
            return {
                ...state,
                currentMemo: action.payload,
                currentName: action.payload2,
            }
        

        case "FETCH_MEMES_ERROR":
            return state;

        default:
            return state;
    }
  }