import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appbar: {
    position: 'relative',
  },
});

const NavBar = (props) => {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static" className={classes.appbar} color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Riesgo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
