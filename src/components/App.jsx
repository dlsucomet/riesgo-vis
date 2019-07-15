import React from 'react';
import Panel from './Panel';
import Map from './Map';
import Filter from './Filter';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chapterName: 'marikina',
      buildingType: 'all',
      amenity: 'all',
      layer: 'flood',
      floodYear: 'fhm005yrs',
      minutes: 5,
      suitabilityYear: 'mcda005yrs',
    };

    this.updateChapter = this.updateChapter.bind(this);
    this.updateAmenity = this.updateAmenity.bind(this);
    this.updateBuildingType = this.updateBuildingType.bind(this);
    this.updateLayer = this.updateLayer.bind(this);
    this.updateFloodYear = this.updateFloodYear.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.updateSuitabilityYear = this.updateSuitabilityYear.bind(this);
  }

  updateChapter = (chapterName) => {
    let { layer } = this.state;

    if (chapterName === 'typhoon') {
      layer = 'flood';
    }

    this.setState({
      chapterName,
      layer,
    });
  }

  updateAmenity = (event) => {
    this.setState({
      amenity: event.target.value,
    });
  }

  updateBuildingType = (event) => {
    this.setState({
      buildingType: event.target.value,
    });
  }

  updateLayer = (event) => {
    this.setState({
      layer: event.target.value,
    });
  }

  updateFloodYear = (event) => {
    this.setState({
      floodYear: event.target.value,
    });
  }

  updateMinutes = (event) => {
    this.setState({
      minutes: parseInt(event.target.value, 10),
    });
  }

  updateSuitabilityYear = (event) => {
    this.setState({
      suitabilityYear: event.target.value,
    });
  }

  render() {
    const {
      chapterName, buildingType, amenity, layer,
      floodYear, minutes, suitabilityYear,
    } = this.state;

    return (
      <div>
        <Map
          chapterName={chapterName}
          buildingType={buildingType}
          amenity={amenity}
          layer={layer}
          floodYear={floodYear}
          minutes={minutes}
          suitabilityYear={suitabilityYear}
        />
        <Panel
          chapterName={chapterName}
          updateChapter={this.updateChapter}
        />
        <Filter
          chapterName={chapterName}
          buildingType={buildingType}
          amenity={amenity}
          layer={layer}
          floodYear={floodYear}
          minutes={minutes}
          suitabilityYear={suitabilityYear}
          updateAmenity={this.updateAmenity}
          updateBuildingType={this.updateBuildingType}
          updateLayer={this.updateLayer}
          updateFloodYear={this.updateFloodYear}
          updateMinutes={this.updateMinutes}
          updateSuitabilityYear={this.updateSuitabilityYear}
        />
      </div>
    );
  }
}
