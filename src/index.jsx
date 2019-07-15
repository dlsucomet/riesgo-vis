import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import App from './components/App';
import 'mapbox-gl/dist/mapbox-gl.css';
import './main.css';
import { transformMat2 } from 'gl-matrix/src/gl-matrix/vec2';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: indigo,
  },
  typography: {
    fontFamily: ['Rubik', 'Arial', 'sans-serif', ].join(','),
    h1: {
      fontFamily: ['DM Serif Display', 'serif'].join(','),
    },
    h2: {
      fontFamily: ['DM Serif Display', 'serif'].join(','),
    },
    h3: {
      fontFamily: ['DM Serif Display', 'serif'].join(','),
      marginBottom: 10,
    },
    h4: {
      fontFamily: ['DM Serif Display', 'serif'].join(','),
    },
    h5: {
      fontFamily: ['DM Serif Display', 'serif'].join(','),
    },
    h6: {
      fontFamily: ['Rubik', 'Arial', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: "fontWeightMedium",
      letterSpacing: 2,
      marginTop: 5,
      marginBottom: 5,
    },
    caption: {
      fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
      fontWeight: 700,
    },
  },
});

function Index() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

render(<Index />, document.getElementById('root'));
