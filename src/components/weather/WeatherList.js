import React from 'react';

import WeatherItem     from './WeatherItem';
import './index.css';

export default function WeatherList(props) {
    const { listWeather, renderIconUrl, tempToСelsius, addDateClass } = props;
    let arr = listWeather.list;

    return (
        <ul className="ul">
            {arr.map((dayWeather, index) => {
                return (
                    <WeatherItem 
                        key={index}
                        index={index}
                        listWeather={listWeather}
                        tempToСelsius={tempToСelsius}
                        renderIconUrl={renderIconUrl}
                        addDateClass={addDateClass}
                    />
                );
            })}
        </ul>
    );
}