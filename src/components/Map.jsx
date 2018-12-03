import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import Grid from '@material-ui/core/Grid';

mapboxgl.accessToken = 'pk.eyJ1IjoiaXdzc3R1YXJ0IiwiYSI6InNaNzMzVXMifQ.OFDL1zM5OjRUHcL_Y5htCA';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 14.643320762156335,
      lng: 121.10719934846895,
      zoom: 12.5,
    };
  }

  componentDidMount() {
    const {
      lng, lat, zoom
    } = this.state;

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div'); // eslint-disable-line

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/dark-v9`,
      center: [lng, lat],
      zoom,
      minZoom: 4,
    });

    this.map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    this.map.on('style.load', () => {
      this.map.addSource('marikinabasemap', {
        type: 'geojson',
        data: 'data/marikina.geojson',
      });

      this.map.addLayer({
        id: 'base',
        type: 'line',
        source: 'marikinabasemap',
        paint: {
          'line-color': '#8bc34a',
          'line-width': 2,
        },
      });

      // this.map.addLayer({
      //   id: 'clusters',
      //   type: 'circle',
      //   source: 'schools',
      //   filter: ['has', 'point_count'],
      //   paint: {
      //     // Use step expressions (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      //     // with three steps to implement three types of circles:
      //     //   * Blue, 20px circles when point count is less than 100
      //     //   * Yellow, 30px circles when point count is between 100 and 750
      //     //   * Pink, 40px circles when point count is greater than or equal to 750
      //     'circle-color': [
      //       'step',
      //       ['get', 'point_count'],
      //       '#FFCCBC',
      //       250,
      //       '#FF8A65',
      //       500,
      //       '#FF5722',
      //       1000,
      //       '#BF360C',
      //     ],
      //     'circle-radius': [
      //       'step',
      //       ['get', 'point_count'],
      //       15,
      //       250,
      //       20,
      //       800,
      //       25,
      //     ],
      //     'circle-opacity': 0.75,
      //   },
      // });
      //
      // this.map.addLayer({
      //   id: 'cluster-count',
      //   type: 'symbol',
      //   source: 'schools',
      //   filter: ['has', 'point_count'],
      //   layout: {
      //     'text-field': '{point_count_abbreviated}',
      //     'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      //     'text-size': 11,
      //   },
      // });
    });

    // this.tooltipContainer = document.createElement('div');
    //
    // const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
    //   offset: [0, -95],
    // }).setLngLat([0, 0]).addTo(this.map);

    // this.map.on('click', (e) => {
    //   const features = this.map.queryRenderedFeatures(e.point, { layers: ['unclustered-point'] });
    //   const mapZoom = this.map.getZoom();
    //
    //   if (features.length > 0) {
    //     this.map.setFilter('selected-point', ['==', 'id', features[0].properties.id]);
    //
    //     this.map.flyTo({
    //       center: e.lngLat,
    //       speed: 0.75, // make the flying slow
    //       zoom: mapZoom < 11.25 ? 11.25 : mapZoom,
    //       // curve: 1, // change the speed at which it zooms out
    //     });
    //
    //     onMapSelect(features[0].properties);
    //   }
    //   // tooltip.setLngLat(e.lngLat);
    //   // this.setTooltip(features);
    // });
    //
    // this.map.on('mousemove', (e) => {
    //   const features = this.map.queryRenderedFeatures(e.point, { layers: ['unclustered-point'] });
    //
    //   this.map.getCanvas().style.cursor = features.length ? 'pointer' : '';
    // });

    this.map.on('move', (e) => {
      console.log(this.map.getZoom());
      console.log(this.map.getCenter());
    })
  }

  componentWillReceiveProps(nextProps) {
    // const { theme, year, calamity, isEvacCenter } = this.props;
    //
    // if (nextProps.theme && nextProps.theme !== theme) {
    //   this.setState({ colors: mapColors[nextProps.theme] });
    //
    //   this.map.setStyle(`mapbox://styles/mapbox/${nextProps.theme}-v9`);
    // }
    //
    // if (nextProps.year && nextProps.year !== year) {
    //   const newStyle = this.map.getStyle();
    //   newStyle.sources.schools.data = `data/schools${nextProps.year}.geojson`;
    //   this.map.setStyle(newStyle);
    // }
    //
    // if (nextProps.isEvacCenter !== isEvacCenter) {
    //   const filters = ['all'];
    //
    //   filters.push(['==', 'evac_center', nextProps.isEvacCenter]);
    //
    //   if (calamity !== 'all') {
    //     filters.push(['>', calamity, 0]);
    //   }
    //
    //   this.map.setFilter('unclustered-point', filters);
    // }
    //
    // if (nextProps.calamity && nextProps.calamity !== calamity) {
    //   if (nextProps.calamity !== 'all') {
    //     this.map.setFilter('unclustered-point', [
    //       'all',
    //       ['==', 'evac_center', isEvacCenter],
    //       ['>', nextProps.calamity, 0],
    //     ]);
    //   } else {
    //     this.map.setFilter('unclustered-point', [
    //       'all',
    //       ['==', 'evac_center', isEvacCenter],
    //     ]);
    //   }
    // }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  /**
   * Creates the tooltip element for the hovered tile
   * @param {object} features - queried features from the map
   * @public
   */
  setTooltip(features) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          MapCard, {
            features,
          },
        ),
        this.tooltipContainer,
      );
    } else {
      ReactDOM.unmountComponentAtNode(this.tooltipContainer);
    }
  }
  //
  // updateStyle() {
  //   // const { circleColor, strokeColor } = this.state.colors;
  //   // this.map.setPaintProperty('unclustered-point', 'circle-color', circleColor);
  //   // this.map.setPaintProperty('unclustered-point', 'circle-stroke-color', strokeColor);
  // }

  tooltipContainer;

  render() {
    const mapStyle = {
      height: '100vh',
      width: '100vw',
    };

    return (
      <Grid container>
        <div style={mapStyle} ref={(el) => { this.mapContainer = el; }} />
      </Grid>
    );
  }
}
