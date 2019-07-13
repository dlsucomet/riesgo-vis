import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { legendOptions, chapterLayers } from '../config/options';

const styles = theme => ({
  labelStyle: {
    margin: '0 0 5px',
    color: '#666',
    textTransform: 'uppercase',
    // fontSize: '11px',
    // fontWeight: '700',
    textAlign: 'left',
  },
  container: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    left: '30%',
    marginLeft: theme.spacing.unit * 2,
    zIndex: 105,
    width: '250px',
    padding: theme.spacing.unit * 2,
    border: '1px solid #999',
    '& ul': {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
    '& ul li': {
      padding: 0,
      margin: 0,
      fontSize: '10px',
      color: '#666',
      fontWeight: 700,
      textTransform: 'uppercase',
      lineHeight: 'normal',
    },
    '& li.graph': {
      clear: 'both',
      overflow: 'hidden',
      display: 'table',
      width: '100%',
      height: '18px',
      borderRadius: '3px',
      border: '1px solid #b3b3b3',
      '& .colors': {
        display: 'table-row',
      },
      '& div': {
        width: '100%',
        height: '18px',
      },
    },
    '& li.min': {
      float: 'left',
      margin: '0 0 5px',
    },
    '& li.max': {
      float: 'right',
      margin: '0 0 5px',
    },
  },
});

const Legend = (props) => {

  const { classes, chapterName } = props;

  if (chapterLayers[chapterName] === undefined) {
    return null;
  }
  const layers = chapterLayers[chapterName];
  const legend = legendOptions[layers[0]];

  return (
    <Paper className={classes.container}>
      <Typography variant="caption" className={classes.labelStyle}>{legend.name}</Typography>
      <ul>
        <li className="min">
          <Typography>&lt; {legend.min}</Typography>
        </li>
        <li className="max">
          <Typography>{legend.max}+</Typography>
        </li>
        <li className="graph">
          <div className="colors">
            <div className="continuous" />
          </div>
        </li>
      </ul>
    </Paper>
  );
};

Legend.propTypes = {
  /** The selected topic tab */
  topic: PropTypes.string.isRequired,
};

export default withStyles(styles)(Legend);
