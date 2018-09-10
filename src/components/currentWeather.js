import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getCurrentWeather,
  searchLocation,
  deleteLocation,
  currentCityState
} from '../actions/actions.js';
import { withStyles } from '@material-ui/core/styles';
import WeatherCard from '../components/weatherCards';
import NewWeather from '../components/newWeather';
import SearchLocation from '../components/searchLocation';
import './currentWeather.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    position: 'absolute',
    width: '100%',
    marginTop: '-1%'
  },
  appBar: {
    marginTop: '2%'
  }
};

class CurrentWeather extends Component {
  state = {
    location: '',
    disableSaveLocation: false,
    open: false
  };

  componentDidMount() {
    this.currentLocation();
    this.getCurrentCityState();
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

  getCurrentCityState() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.props.currentCityState(lat, lng);
      });
    }
  }

  handleOnChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState({
      location: this.state.location,
      disableSaveLocation: true,
      open: false
    });
    this.props.searchLocation(this.state.location);
  };

  handleDelete = () => {
    this.setState({ disableSaveLocation: false });
    this.props.deleteLocation();
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const isEnabled =
      this.state.location.length > 0 && !this.state.disableSaveLocation;
    return (
      <div className="background">
        <AppBar color="default" className={classes.appBar}>
          <Typography variant="title" color="inherit" className={classes.title}>
            Current weather for {this.props.cityState.adminArea5},
            {this.props.cityState.adminArea3}
          </Typography>
          <div className="search">
            <SearchLocation
              location={this.state.location}
              handleOnChange={this.handleOnChange}
              handleOnSubmit={this.handleOnSubmit}
              disableSaveLocation={this.state.disableSaveLocation}
              handleDelete={this.handleDelete}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              open={this.state.open}
              isEnabled={isEnabled}
            />
          </div>
        </AppBar>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    location: state.location,
    cityState: state.cityState
  };
};

const CurrentWeatherStyles = withStyles(styles)(CurrentWeather);

export default connect(
  mapStateToProps,
  { getCurrentWeather, searchLocation, deleteLocation, currentCityState }
)(CurrentWeatherStyles);
