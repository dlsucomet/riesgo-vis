import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { chapters } from '../config/options';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5laGVueW8iLCJhIjoiY2pndWV6dThmMTJlYTJxcTl5aDBoNTg5aSJ9.4qHmp0Q31Yuntdp6Ee_x-A';

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
      lng, lat, zoom,
    } = this.state;

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div'); // eslint-disable-line

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/brianehenyo/cjxkcz3mw46z81crr7sbh3bpz',
      center: [lng, lat],
      zoom,
      minZoom: 12,
      maxZoom: 15,
      pitch: 45,
      bearing: -17.6,
    });

    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    this.map.on('style.load', () => {
      this.map.addSource('riesgo', {
        type: 'vector',
        url: 'mapbox://unissechua.8kcfu1fc',
      });

      this.map.addSource('evacuation', {
        type: 'vector',
        url: 'mapbox://unissechua.cjxpvu8a80kxh2nlktq629gnz-5ufkm',
      });

      this.map.addSource('landelevation', {
        type: 'vector',
        url: 'mapbox://unissechua.54ft2aw9',
      });

      this.map.addLayer({
        id: 'landelevation3d',
        type: 'fill-extrusion',
        source: 'landelevation',
        'source-layer': 'landelevation_100x100',
        // layout: {
        //   visibility: 'visible',
        // },
        paint: {
          'fill-extrusion-color': {
            property: 'value',
            stops: [
              [2, '#ffffcc'],
              [17, '#c7e9b4'],
              [35, '#7fcdbb'],
              [52, '#41b6c4'],
              [70, '#1d91c0'],
            ],
          },
          'fill-extrusion-height': ['*', 10, ['number', ['get', 'value'], 1]],
          'fill-extrusion-opacity': 1,
          'fill-extrusion-opacity-transition': {
            duration: 800,
            delay: 0,
          }
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'flood',
        type: 'fill',
        source: 'riesgo',
        'source-layer': 'riesgo',
        // layout: {
        //   visibility: 'none',
        // },
        paint: {
          'fill-color': {
            property: 'fhm005yrs',
            stops: [
              [1, '#e31a1c'],
              [2, '#fd8d3c'],
              [3, '#fecc5c'],
              [4, '#ffffb2'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          }
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'evac_center',
        type: 'circle',
        source: 'evacuation',
        'source-layer': 'marikina_evac_centroids',
        // layout: {
        //   visibility: 'none',
        // },
        paint: {
          'circle-opacity': 0,
          'circle-opacity-transition': {
            duration: 800,
            delay: 0,
          },
          // 'circle-stroke-color': '#888888',
          // 'circle-stroke-width': 1,
          'circle-radius': {
            property: 'area',
            stops: [
              [{ zoom: 12, value: 500 }, 5],
              [{ zoom: 12, value: 19000 }, 10],
              [{ zoom: 13.5, value: 500 }, 5],
              [{ zoom: 13.5, value: 19000 }, 15],
              [{ zoom: 15, value: 500 }, 10],
              [{ zoom: 15, value: 19000 }, 30],
            ],
          },
          'circle-color': '#000000',
        //   'circle-color': [
        //     'match',
        //     ['get', 'amenity'],
        //     'school', '#fbb03b',
        //     'community_centre', '#223b53',
        //     'basketball_court', '#e55e5e',
        //     /* other */ '#ccc',
        //   ],
        },
      });

      this.map.addLayer({
        id: 'population',
        type: 'fill',
        source: 'riesgo',
        'source-layer': 'riesgo',
        // layout: {
        //   visibility: 'none',
        // },
        paint: {
          'fill-color': {
            property: 'population',
            stops: [
              [0, '#ffffcc'],
              [0.01, '#7fcdbb'],
              [0.02, '#1d91c0'],
              [0.03, '#0c2c84'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'roaddistance',
        type: 'fill',
        source: 'riesgo',
        'source-layer': 'riesgo',
        // layout: {
        //   visibility: 'none',
        // },
        paint: {
          'fill-color': {
            property: 'roaddistance',
            stops: [
              [150, '#ffffcc'],
              [3000, '#c7e9b4'],
              [6000, '#7fcdbb'],
              [18500, '#41b6c4'],
              [31000, '#1d91c0'],
              [34000, '#225ea8'],
              [37000, '#0c2c84'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');
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
  }

  componentWillReceiveProps(nextProps) {
    const { chapterName } = this.props;

    if (this.map.isStyleLoaded()) {
      if (nextProps.chapterName !== chapterName) {
        const { layers, position } = chapters[nextProps.chapterName];

        layers.forEach((data) => {
          // this.map.setLayoutProperty(data.id, 'visibility', data.visibility);
          const layer = this.map.getLayer(data.id);

          if (layer !== undefined) {
            const layerType = layer.type;
            this.map.setPaintProperty(data.id, `${layerType}-opacity`, data.opacity);
          }
        });

        this.map.easeTo(position);
      }
    }
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
  // setTooltip(features) {
  //   if (features.length) {
  //     ReactDOM.render(
  //       React.createElement(
  //         MapCard, {
  //           features,
  //         },
  //       ),
  //       this.tooltipContainer,
  //     );
  //   } else {
  //     ReactDOM.unmountComponentAtNode(this.tooltipContainer);
  //   }
  // }
  //
  // updateStyle() {
  //   // const { circleColor, strokeColor } = this.state.colors;
  //   // this.map.setPaintProperty('unclustered-point', 'circle-color', circleColor);
  //   // this.map.setPaintProperty('unclustered-point', 'circle-stroke-color', strokeColor);
  // }

  tooltipContainer;

  render() {
    const mapStyle = {
      // height: '100vh',
      // width: '100vw',
      position: 'fixed',
      width: '70%',
      left: '30%',
      top: 0,
      bottom: 0,
    };

    return (
      <div style={mapStyle} ref={(el) => { this.mapContainer = el; }} />
      // <Legend />
    );
  }
}
