import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  tooltip: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
  },
  caption: {
    fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
    fontWeight: 700,
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#666',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: ['Rubik', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    color: '#000',
  },
  item: {
    paddingBottom: theme.spacing.unit,
  },
});

const MapTooltip = (props) => {
  const { classes, features, tooltipOptions } = props;
  const feature = features[0].properties;

  return (
    <Paper className={classes.tooltip}>
      {tooltipOptions.features.map(data => (
        <div className={classes.item}>
          <span className={classes.caption}>
            {data.label}
            {': '}
          </span>
          <span className={classes.subtitle}>{feature[data.value]}</span>
        </div>
      ))}

    </Paper>
  );
};

MapTooltip.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  features: PropTypes.array.isRequired, // eslint-disable-line
  tooltipOptions: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(MapTooltip);
