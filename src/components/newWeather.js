import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNewLocationWeather } from '../actions/actions.js';
import NewWeatherCard from '../components/newWeatherCards';

import './newWeather.css';

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
        <div component="p" className="noticeTwo">
          Please click "Remove {this.props.location}" to add a different City,
          State
        </div>
        <div className="notice">Current weather for {this.props.location}</div>
        {this.props.newWeather.map((newCurrentWeather, index) => {
          return (
            <NewWeatherCard
              key={index}
              newCurrentWeather={newCurrentWeather}
              location={this.props.location}
            />
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
