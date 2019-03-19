import React from 'react';
import Moment from 'react-moment';

import './index.css';

export default function WeatherItem(props) {
    const { listWeather, renderIconUrl, tempToСelsius, addDateClass, index } = props;
    renderIconUrl();
    tempToСelsius();
    addDateClass();

    return (

        <li key={index} className={listWeather.list[index].addClass}>
            <span className="date"><Moment unix format="DD:MM:YYYY">{listWeather.list[index].dt}</Moment></span>
            <span className="time"><Moment unix format="h:mm a">{listWeather.list[index].dt}</Moment></span>
            <span className="temp">{listWeather.list[index].tempCelsius}</span>
            <img alt="broken clouds" src={listWeather.list[index].urlIcon} />
        </li>

    );
}
