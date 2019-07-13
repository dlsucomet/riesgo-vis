import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { filters } from '../config/options';

const styles = theme => ({
  switch: {
    position: 'fixed',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 2,
    zIndex: '100',
  },
  paper: {
    paddingTop: theme.spacing.unit,
    paddingBottom: 0,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  legend: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 12,
  },
});


const Filter = (props) => {
  const {
    classes, chapterName
  } = props;

  if (filters[chapterName] === undefined) {
    return null;
  }

  const choices = filters[chapterName];

  return (
    <div className={classes.switch}>
      {
        choices.map(filter => (
          <Paper className={classes.paper}>
            <FormControl component="fieldset">
              <FormLabel component="legend" className={classes.legend}>{filter.label}</FormLabel>
              <RadioGroup
                aria-label="Amenity Type"
                name="amenity"
                value={props[filter.value]}
                onChange={props[filter.onChange]}
              >
                {filter.hasAll && <FormControlLabel value="all" style={{ height: 36 }} control={<Radio />} label="All" />}
                {filter.options.map(option => (
                  <FormControlLabel
                    value={option.value}
                    style={{ height: 36 }}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Paper>
        ))
      }
    </div>
  );
};

export default withStyles(styles)(Filter);
