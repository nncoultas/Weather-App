import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

class TitleBar extends Component {
  render() {
    return (
      <Typography>
        <Typography>
          Powered by <a href="https://darksky.net/dev/">Dark Sky API</a>
        </Typography>
      </Typography>
    );
  }
}

export default TitleBar;
