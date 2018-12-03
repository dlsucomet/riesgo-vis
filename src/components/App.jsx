import React from 'react';
import NavBar from './NavBar';
import Map from './Map';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar />
        <Map />
      </div>
    );
  }
}
