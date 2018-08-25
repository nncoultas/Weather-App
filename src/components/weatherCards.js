import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

const styles = {
  card: {
    width: '75%',
    height: '65%',
    marginTop: '5%'
  },
  weatherWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  textSize: {
    fontSize: '2.5rem'
  },
  textStyle: {
    marginTop: '-2%',
    marginBottom: '11%'
  },
  dateStyle: {
    background: '#8fcfec',
    color: '#222428',
    height: '14%',
    fontSize: '2rem',
    borderRadius: '3px'
  }
};

const WeatherCard = props => {
  const { classes } = props;
  return (
    <div className={classes.weatherWrapper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.dateStyle}>
            {moment
              .unix(props.currentWeather.time)
              .utc()
              .format('ddd, DD MMM')}
          </Typography>
          <Typography>High</Typography>
          <Typography className={`${classes.textSize} ${classes.textStyle}`}>
            {props.currentWeather.temperatureMax.toFixed(0)}
            &deg; F
          </Typography>
          <Typography color="textSecondary">Low</Typography>
          <Typography className={classes.textSize} color="textSecondary">
            {props.currentWeather.temperatureMin.toFixed(0)}
            &deg; F
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WeatherCard);
