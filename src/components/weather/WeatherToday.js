import React from 'react';
import Moment from 'react-moment';
import './index.css';

export default function WeatherToday(props) {
    const { listWeather, renderIconUrl, tempToСelsius, windDeg } = props;
    renderIconUrl();
    tempToСelsius();
    windDeg();

    return (
        <React.Fragment>
            <div className="city">{listWeather.city.name} {listWeather.city.country}</div>
            <div className="cityTime"><Moment unix format="h:mm">{listWeather.list[0].dt}</Moment></div>
            <span className="descr">{listWeather.list[0].weather[0].description}</span>
            <img alt="scattered clouds" src={listWeather.list[0].urlIcon} />
            <span className="temp">{listWeather.list[0].tempCelsius}</span>
            <div className="windDeg">{ listWeather.list[0].deg }</div>
            <div className="windSpeed">{listWeather.list[0].wind.speed} m/s</div>
        </React.Fragment>
    );
}
