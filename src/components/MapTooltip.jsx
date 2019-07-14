import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  tooltip: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  caption: {
    fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
    fontWeight: 700,
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#666',
  },
  subtitle: {
    fontFamily: ['Rubik', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    color: '#000',
  },
});

const MapTooltip = (props) => {
  const { classes, features, chapterName } = props;
  const feature = features[0].properties;

  if (chapterName !== 'typhoon') {
    return null;
  }

  return (
    <Paper className={classes.tooltip}>
      <Typography className={classes.caption}>Building type</Typography>
      <Typography className={classes.subtitle}>{feature.building}</Typography>
    </Paper>
  );
};

MapTooltip.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  features: PropTypes.array.isRequired, // eslint-disable-line
  chapterName: PropTypes.string.isRequired,
};

export default withStyles(styles)(MapTooltip);
