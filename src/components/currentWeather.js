import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getCurrentWeather,
  searchLocation,
  deleteLocation
} from '../actions/actions.js';
import WeatherCard from '../components/weatherCards';
import NewWeather from '../components/newWeather';
import SearchLocation from '../components/searchLocation';
import './currentWeather.css';

class CurrentWeather extends Component {
  state = {
    location: '',
    disableSaveLocation: false
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
    this.setState({ location: this.state.location, disableSaveLocation: true });
    this.props.searchLocation(this.state.location);
  };

  handleDelete = () => {
    this.setState({ disableSaveLocation: false });
    this.props.deleteLocation();
  };

  render() {
    const isEnabled =
      this.state.location.length > 0 && !this.state.disableSaveLocation;
    return (
      <div>
        <div className="weatherStyles">
          {this.props.weather.map((currentWeather, index) => {
            return <WeatherCard key={index} currentWeather={currentWeather} />;
          })}
        </div>
        <div className="newWeatherStyles">
          {this.props.location.map((newLocation, index) => {
            return (
              <NewWeather
                key={index}
                newLocation={newLocation}
                location={this.state.location}
              />
            );
          })}
        </div>
        <div className="search">
          <SearchLocation
            location={this.state.location}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
            disableSaveLocation={this.state.disableSaveLocation}
            handleDelete={this.handleDelete}
            isEnabled={isEnabled}
          />
        </div>
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
  { getCurrentWeather, searchLocation, deleteLocation }
)(CurrentWeather);
