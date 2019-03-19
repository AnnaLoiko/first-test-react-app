import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import WeatherToday     from '../components/weather/WeatherToday';
import WeatherList     from '../components/weather/WeatherList';
import '../components/weather/index.css';

import { fetchWeather, createIconUrl, createTempСelsius, createWindDeg, addDateClassForNewDate } from '../redux/actions';

class Weather extends Component {
    state = {
        listWeather: [],
    }

    componentDidMount() {
        const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247';
        this.props.fetchWeather(apiUrl);
    }

    renderIconUrl = () => {
        this.props.createIconUrl();
    }

    tempToСelsius = () => {
        this.props.createTempСelsius();
    }

    addDateClass = (date) => {
        console.log('date', date);
        this.props.addDateClassForNewDate(date);
    }

    windDeg = () => {
        this.props.createWindDeg();
    }


    render() {
        const { listWeather} = this.props;

        if (listWeather.length !== 0){
            const { listWeather } = this.props;

            if (window.location.pathname == '/weather') {
                return (
                    <div className="container">
                        <h1>Погода</h1>
                        <div id="forecast" className="tagForecast">
                                                    
                            <WeatherToday 
                                tempToСelsius={this.tempToСelsius}
                                renderIconUrl={this.renderIconUrl}
                                listWeather={listWeather}
                                windDeg={this.windDeg}
                            />
                            
                            <WeatherList 
                                listWeather={listWeather}
                                renderIconUrl={this.renderIconUrl}
                                tempToСelsius={this.tempToСelsius}
                                addDateClass={this.addDateClass}
                            />
                        </div>
                    </div>	
                );
            } 
            if (window.location.pathname !== '/weather') {
                return (
                    <div id="forecast" className="tagForecast">
                        <WeatherToday 
                            tempToСelsius={this.tempToСelsius}
                            renderIconUrl={this.renderIconUrl}
                            listWeather={listWeather}
                            windDeg={this.windDeg}
                        />
                    </div>
                    	
                );                
            }
        
        
        } else {
            return(
                <React.Fragment>Заглушка</React.Fragment>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        listWeather: state.listWeather.items,
    }
}

// или
// const mapStateToProps = ({ users }) => ({ users: users.items });
const actions = { fetchWeather, createIconUrl, createTempСelsius, createWindDeg, addDateClassForNewDate };
export default connect(mapStateToProps, actions)(Weather);