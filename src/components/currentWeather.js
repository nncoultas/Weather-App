import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../actions/actions.js';
import WeatherCard from '../components/weatherCards';
import './currentWeather.css';

class CurrentWeather extends Component {
  componentDidMount() {
    this.currentLocation();
  }

  currentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        this.props.getCurrentWeather(lat, long);
      });
    }
  }

  render() {
    return (
      <div className="weatherStyles">
        {console.log(this.props)}
        {this.props.weather.map((currentWeather, index) => {
          return <WeatherCard key={index} currentWeather={currentWeather} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(
  mapStateToProps,
  { getCurrentWeather }
)(CurrentWeather);
