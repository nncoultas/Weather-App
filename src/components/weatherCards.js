import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    width: '45%',
    height: '100%',
    marginTop: '5%'
  },
  weatherWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
};

const WeatherCard = props => {
  const { classes } = props;
  return (
    <div className={classes.weatherWrapper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography>{props.currentWeather.temperatureMax}</Typography>
          <Typography color="textSecondary">
            {props.currentWeather.temperatureMin}
          </Typography>
          <Typography component="p" />
        </CardContent>
      </Card>
    </div>
  );
};

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherCard);
