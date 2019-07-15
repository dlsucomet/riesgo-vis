import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  tooltip: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
  item: {
    paddingBottom: theme.spacing.unit,
  },
  title: {
    fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
    fontSize: 16,
    fontWeight: 700,
    color: '#333',
  },
});

const MapTooltip = (props) => {
  const { classes, features, tooltipOptions } = props;
  const feature = features[0].properties;

  return (
    <Paper className={classes.tooltip}>
      {tooltipOptions.features.map((data) => {
        switch (data.type) {
          case 'title':
            return (
              <div className={classes.item}>
                <span className={classes.title}>{feature[data.value]}</span>
              </div>
            );
          case 'inline':
            return (
              <div className={classes.item}>
                <span className={classes.subtitle}>
                  {feature[data.value]}
                  {' '}
                  {data.label}
                </span>
              </div>
            );
          default:
            return (
              <div className={classes.item}>
                <div className={classes.caption}>{data.label}</div>
                <div className={classes.subtitle}>{feature[data.value]}</div>
              </div>
            );
        }
      })}
    </Paper>
  );
};

MapTooltip.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  features: PropTypes.array.isRequired, // eslint-disable-line
  tooltipOptions: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(MapTooltip);
