import React, { Component } from 'react';
import { deleteLocation } from '../actions/actions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column'
  },
  modal: {
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  searchLocation: {
    width: '100%'
  },
  location: {
    marginLeft: '-13%',
    position: 'absolute',
    marginTop: '-0.2%'
  },
  remove: {
    marginTop: '-0.5%'
  }
});

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#8fcfec'
    }
  }
});

class SearchLocation extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.searchLocation}>
        <Modal
          open={this.props.open}
          onClose={this.props.handleClose}
          className={classes.modal}
        >
          <div className={classes.paper}>
            <Typography variant="title">
              Search the weather for a new location
            </Typography>
            <Typography variant="subheading">
              Search by City,State (i.e Mesa,AZ)
            </Typography>
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
              onClick={this.props.handleOnSubmit}
              disabled={!this.props.isEnabled}
            >
              Add Location
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={this.props.handleClose}
            >
              Close
            </Button>
          </div>
        </Modal>
        <MuiThemeProvider theme={theme}>
          <Button
            className={classes.location}
            variant="contained"
            color="secondary"
            onClick={this.props.handleOpen}
          >
            Search Location
          </Button>

          <Button
            className={classes.remove}
            color="secondary"
            variant="contained"
            onClick={this.props.handleDelete}
          >
            Remove {this.props.location}
          </Button>
        </MuiThemeProvider>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    newWeather: state.newWeather
  };
};

const SearchNewLocation = withStyles(styles)(SearchLocation);

export default connect(
  mapStateToProps,
  { deleteLocation }
)(SearchNewLocation);
