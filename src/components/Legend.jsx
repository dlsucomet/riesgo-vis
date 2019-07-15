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
    textAlign: 'left',
  },
  container: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    left: '30%',
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    zIndex: 105,
    width: '250px',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
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
        height: '18px',
      },
      '& .quartile': {
        display: 'table-cell',
      },
    },
    '& li.min': {
      float: 'left',
    },
    '& li.max': {
      float: 'right',
    },
  },
  category: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    left: '30%',
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    zIndex: 105,
    width: '120px',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
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
    '& li span': {
      width: '18px',
      height: '18px',
      borderRadius: '3px',
      border: '1px solid #b3b3b3',
      display: 'inline-block',
    },
  },
  categorylabel: {
    display: 'inline-block',
    verticalAlign: 'top',
    lineHeight: '22px',
    paddingLeft: '10px',
  }
});

const Legend = (props) => {
  const { classes, chapterName, layer } = props;

  if (chapterLayers[chapterName] === undefined) {
    return null;
  }
  const layers = chapterLayers[chapterName];
  let legend;

  if (layers.length > 1) {
    legend = legendOptions[layer];
  } else {
    legend = legendOptions[layers[0]];
  }

  if (legend.range) {
    return (
      <Paper className={classes.container}>
        <Typography variant="caption" className={classes.labelStyle}>{legend.name}</Typography>
        <ul>
          <li className="min">
            <Typography variant="overline">
              {legend.range && <span>&lt; </span>}
              {legend.min}
            </Typography>
          </li>
          <li className="max">
            <Typography variant="overline">
              {legend.max}
              {legend.range && <span>+</span>}
            </Typography>
          </li>
          <li className="graph">
            <div className="colors">
              <div style={{ width: '100%', background: `linear-gradient(to right, ${legend.colors.join(',')})` }} />
            </div>
          </li>
        </ul>
      </Paper>
    );
  }

  if (!legend.range) {
    return (
      <Paper className={classes.category}>
        <Typography variant="caption" className={classes.labelStyle}>{legend.name}</Typography>
        <ul>
          {legend.colors.map(color => (
            <li>
              <span style={{ backgroundColor: color.color }} />
              <Typography className={classes.categorylabel}>{color.label}</Typography>
            </li>
          ))}
        </ul>
      </Paper>
    )
  }
};

Legend.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  chapterName: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
};

export default withStyles(styles)(Legend);
