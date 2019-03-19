import axios from 'axios';

export const createBook               = book   => ({type:'CREATE_BOOK', payload: book});
export const updateBook               = bookId => ({type:'UPDATE_BOOK', payload: bookId});
export const deleteBook               = bookId => ({type:'DELETE_BOOK', payload: bookId});
export const addBookToFavourite       = bookId => ({type:'ADD_BOOK_TO_FAVOURITE', payload: bookId});
export const deleteBookFromFavourite  = bookId => ({type:'DELETE_BOOK_FROM_FAVOURITE', payload: bookId});
export const likeBook                 = bookId => ({type:'LIKE_BOOK', payload: bookId});
export const dislikeBook              = bookId => ({type:'DISLIKE_BOOK', payload: bookId});


export const createIconUrl            = icon  => ({type:'CREATE_ICON_URL', payload: icon});
export const createTempСelsius        = temp  => ({type:'TEMP_CELSIUS', payload: temp});
export const createWindDeg            = deg   => ({type:'WIND_DEG', payload: deg});
export const addDateClassForNewDate   = date  => ({type:'ADD_CLASS_NEW_DATE', payload: date});


export const createVideo              = id    => ({type:'CREATE_VIDEO', payload: id});


export const writeIdForGenerator      = (id, name)    => ({type:'WRITE_MEME_ID', payload: id, payload2: name});

const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247';


export const fetchWeather = () => {
  return (dispatch) => {
    axios(`${apiUrl}`)
      .then(response => {
        dispatch(fetchWeatherSuccess(response.data));
      });
  }
}
const fetchWeatherSuccess = listWeather => ({type: "FETCH_WEATHER_SUCCESS", payload: listWeather});


export const fetchVideo = url => {
  return (dispatch) => {
    axios(`${url}`)
      .then(response => {
        dispatch(fetchVideoSuccess(response.data));
      });
  }
}
const fetchVideoSuccess = url => ({ type: "CREATE_VIDEO_SUCCESS", payload: url });


export const fetchCurrency = apiCurr => {
  return (dispatch) => {
    axios(`${apiCurr}`)
      .then(response => {
        dispatch(fetchCurrencySuccess(response.data));
      });
  }
}
const fetchCurrencySuccess = data => ({ type: "FETCH_CURRENCY_SUCCESS", payload: data });


const apiMemes = 'https://api.imgflip.com/get_memes';
export const fetchMemes = (count) => {
  return (dispatch) => {
    axios(`${apiMemes}`, count)
      .then(response => {
        dispatch(fetchMemesSuccess(response.data, count));
      })
      .catch(error => dispatch(postMessagesError(error)));
  }
}
const fetchMemesSuccess = (items, count) => ({ type: "FETCH_MEMES_SUCCESS", payload: items, payload2: count });




const apiPostMemes = 'https://api.imgflip.com/caption_image';
export const generateMeme = message => dispatch => {
  axios.post(apiPostMemes, message)
    .then(response => dispatch(postMessagesSuccess(response.data)))
    .catch(error => dispatch(postMessagesError(error)));
}
const postMessagesSuccess = message => ({ type: "POST_MESSAGES_SUCCESS", payload: message })
const postMessagesError   = error => ({ type: "POST_MESSAGES_ERROR", payload: error })