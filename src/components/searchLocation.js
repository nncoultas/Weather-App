import React, { Component } from 'react';
import { deleteLocation } from '../actions/actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchLocation extends Component {
  render() {
    return (
      <form className="SearchLocation" onSubmit={this.props.handleOnSubmit}>
        <TextField
          type="text"
          id="location"
          label="Search Location"
          onChange={this.props.handleOnChange('location')}
          placeholder="Washington,DC"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={this.props.disableSaveLocation}
        >
          Save Location
        </Button>
        <Button variant="contained" onClick={this.props.handleDelete}>
          Delete Location
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    newWeather: state.newWeather,
    location: state.location
  };
};

export default connect(
  mapStateToProps,
  { deleteLocation }
)(SearchLocation);
