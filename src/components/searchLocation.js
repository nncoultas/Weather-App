import React, { Component } from 'react';
// import { searchLocation } from '../actions/actions';
// import { connect } from 'react-redux';
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
          value={this.props.location}
          placeholder="Washington,DC"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button variant="contained" type="submit">
          Save Location
        </Button>
      </form>
    );
  }
}

export default SearchLocation;
