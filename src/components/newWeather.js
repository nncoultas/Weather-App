import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewLocationWeather } from '../actions/actions.js';
import NewWeatherCard from '../components/newWeatherCards';

class NewWeather extends Component {
  componentDidMount() {
    this.props.getNewLocationWeather(
      this.props.newLocation.lat,
      this.props.newLocation.lng
    );
  }
  render() {
    return (
      <div className="newWeatherStyles">
        {this.props.newWeather.map((newCurrentWeather, index) => {
          return (
            <NewWeatherCard key={index} newCurrentWeather={newCurrentWeather} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newWeather: state.newWeather
  };
};

export default connect(
  mapStateToProps,
  { getNewLocationWeather }
)(NewWeather);
