import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../actions/actions.js';
import WeatherCard from '../components/weatherCards';

class NewWeather extends Component {
  componentDidMount() {
    this.props.getCurrentWeather(
      this.props.newLocation.lat,
      this.props.newLocation.lng
    );
  }
  render() {
    return (
      <div className="weatherStyles">
        {console.log(this.props)}
        {this.props.weather.map((currentWeather, index) => {
          return <WeatherCard key={index} currentWeather={currentWeather} />;
        })}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

export default connect(
  mapStateToProps,
  { getCurrentWeather }
)(NewWeather);
