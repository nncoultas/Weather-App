import React, { Component } from 'react';
import { deleteLocation } from '../actions/actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchLocation extends Component {
  render() {
    return (
      <form className="searchLocation" onSubmit={this.props.handleOnSubmit}>
        <TextField
          type="text"
          id="location"
          onChange={this.props.handleOnChange('location')}
          placeholder="Search Location"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          variant="contained"
          type="submit"
          color="default"
          disabled={!this.props.isEnabled}
        >
          Add Location
        </Button>
        <Button
          color="default"
          variant="contained"
          onClick={this.props.handleDelete}
        >
          Remove {this.props.location}
        </Button>
      </form>
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
  { deleteLocation }
)(SearchLocation);
