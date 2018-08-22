import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

class TitleBar extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Typography variant="title" color="inherit">
          Current weather for your location
        </Typography>
      </AppBar>
    );
  }
}

export default TitleBar;
