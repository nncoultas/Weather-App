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
    height: '39%',
    marginTop: '5%'
  },
  weatherWrapper: {
    height: '269%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage:
      'linear-gradient( to top, #8fcfec, #76c1e6, #5bb3e1, #3ca5db, #5db4e1 );'
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
  },
  footer: {
    marginTop: '25%'
  }
};

const NewWeatherCard = props => {
  const { classes } = props;
  return (
    <div className={classes.weatherWrapper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.dateStyle}>
            {moment
              .unix(props.newCurrentWeather.time)
              .utc()
              .format('ddd, DD MMM')}
          </Typography>
          <Typography>High</Typography>
          <Typography className={`${classes.textSize} ${classes.textStyle}`}>
            {props.newCurrentWeather.temperatureMax.toFixed(0)}
            &deg; F
          </Typography>
          <Typography color="textSecondary">Low</Typography>
          <Typography className={classes.textSize} color="textSecondary">
            {props.newCurrentWeather.temperatureMin.toFixed(0)}
            &deg; F
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

NewWeatherCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewWeatherCard);
