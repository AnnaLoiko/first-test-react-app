import moment from 'moment';

const initialState = {
  items: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        items: action.payload
      }


    case "FETCH_WEATHER_ERROR":
      return state;


    case "CREATE_ICON_URL":
      let arr = state.items.list;
      let addUrlIcons = arr.map( (date,i)  => {
        let icon = date.weather[0].icon;
        let urlIcon = `https://openweathermap.org/img/w/${icon}.png`;
        date.urlIcon = urlIcon;
        return date;
      })
      return {
        ...state,
        list: addUrlIcons
      }


    case "TEMP_CELSIUS":
      let arrCelsium = state.items.list;
      let addTempCelsium = arrCelsium.map( (date,i)  => {
        let temp = date.main.temp;
        let tempCelsius = Math.round(temp - 273.15) + '°C';
        date.tempCelsius = tempCelsius;
        return date;
      })    
      return {
        ...state,
        list: addTempCelsium
      }


    case "ADD_CLASS_NEW_DATE":
      let arrDate = state.items.list;
      let addClassNewDate = arrDate.map( (date,i)  => {
        if (moment.unix(date.dt).format("h:mm a") == '12:00 am') {
          date.addClass = "nextdate";
        }
        return date;
      });

      return {
        ...state,
        list: addClassNewDate
      }

      
    case "WIND_DEG":
      console.log('state v "WIND_DEG"', state);
      let arrWind = state.items.list;
      let addWind = arrWind.map( (data,i)  => {
        let deg = data.wind.deg;

        if (deg > 0 && deg <= 22.5 || deg > 337.5){ 
          deg = 'северный';
        } else if (deg > 22.5 && deg > 67.5){
          deg = 'северо-восточный';
        } else if (deg > 67.5 && deg <= 112.5){
          deg = 'восточный';
        } else if (deg > 112.5 && deg <= 157.5){
          deg = 'юго-восточный';
        } else if (deg > 157.5 && deg <= 202.5){
          deg = 'южный';
        } else if (deg > 202.5 && deg <= 247.5){
          deg = 'юго-западный';
        } else if (deg > 247.5 && deg <= 292.5){
          deg = 'западный';
        } else if (deg > 292.5 && deg <= 360){
          deg = 'северо-западный';
        } else {
          deg = 'нет данных';
        }
        data.deg = deg;

        return data;
      })
    
      return {
        ...state,
        list: addWind
      }

     

    default:
      return state;
  }
}