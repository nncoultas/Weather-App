import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather, searchLocation } from '../actions/actions.js';
import WeatherCard from '../components/weatherCards';
import NewWeather from '../components/newWeather';
import SearchLocation from '../components/searchLocation';
import './currentWeather.css';

class CurrentWeather extends Component {
  state = {
    location: ''
  };

  componentDidMount() {
    this.currentLocation();
  }

  currentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.props.getCurrentWeather(lat, lng);
      });
    }
  }

  handleOnChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState({ location: this.state.location });
    this.props.searchLocation(this.state.location);
  };

  render() {
    return (
      <div className="weatherStyles">
        {this.props.weather.map((currentWeather, index) => {
          return <WeatherCard key={index} currentWeather={currentWeather} />;
        })}
        <SearchLocation
          location={this.state.location}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        {this.props.location.map((newLocation, index) => {
          return <NewWeather key={index} newLocation={newLocation} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    location: state.location
  };
};

export default connect(
  mapStateToProps,
  { getCurrentWeather, searchLocation }
)(CurrentWeather);
