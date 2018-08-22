import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather } from '../actions/actions.js';

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
    return <div>{console.log(this.props)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather.current
  };
}

export default connect(
  mapStateToProps,
  { getCurrentWeather }
)(CurrentWeather);