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
    };

    this.updateChapter = this.updateChapter.bind(this);
    this.updateAmenity = this.updateAmenity.bind(this);
    this.updateBuildingType = this.updateBuildingType.bind(this);
    this.updateLayer = this.updateLayer.bind(this);
    this.updateFloodYear = this.updateFloodYear.bind(this);
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

  render() {
    const {
      chapterName, buildingType, amenity, layer, floodYear,
    } = this.state;

    return (
      <div>
        <Map
          chapterName={chapterName}
          buildingType={buildingType}
          amenity={amenity}
          layer={layer}
          floodYear={floodYear}
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
          updateAmenity={this.updateAmenity}
          updateBuildingType={this.updateBuildingType}
          updateLayer={this.updateLayer}
          updateFloodYear={this.updateFloodYear}
        />
      </div>
    );
  }
}
