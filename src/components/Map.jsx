import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Legend from './Legend';
import MapTooltip from './MapTooltip';
import { chapters } from '../config/options';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5laGVueW8iLCJhIjoiY2pndWV6dThmMTJlYTJxcTl5aDBoNTg5aSJ9.4qHmp0Q31Yuntdp6Ee_x-A';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 14.642017161220147,
      lng: 121.10719934846895,
      zoom: 12.5,
    };
  }

  componentDidMount() {
    const {
      lng, lat, zoom,
    } = this.state;

    const { chapterName } = this.props;

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div'); // eslint-disable-line

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/brianehenyo/cjxkcz3mw46z81crr7sbh3bpz',
      center: [lng, lat],
      zoom,
      minZoom: 12,
      maxZoom: 15,
      pitch: 0,
      bearing: 0,
    });

    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    this.map.on('style.load', () => {
      this.map.addSource('riesgo', {
        type: 'vector',
        url: 'mapbox://unissechua.8kcfu1fc',
      });

      this.map.addSource('evacuation', {
        type: 'vector',
        url: 'mapbox://unissechua.9hp5dege',
      });

      this.map.addSource('landelevation', {
        type: 'vector',
        url: 'mapbox://unissechua.54ft2aw9',
      });

      this.map.addSource('radius', {
        type: 'vector',
        url: 'mapbox://unissechua.cjxyxmuw109vi2tp7nn20ic5a-83o6p',
      });

      this.map.addSource('buildings', {
        type: 'vector',
        url: 'mapbox://unissechua.bqwm77y2',
      });

      this.map.addSource('boundary', {
        type: 'geojson',
        data: 'data/marikina_boundary.geojson',
      });

      this.map.addLayer({
        id: 'boundary',
        type: 'fill',
        source: 'boundary',
        paint: {
          'fill-color': '#c46806',
          // 'line-width': 4,
          'fill-opacity': 0.5,
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'landelevation3d',
        type: 'fill-extrusion',
        source: 'landelevation',
        'source-layer': 'landelevation_100x100',
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
          'fill-extrusion-opacity': 0,
          'fill-extrusion-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'landelevation',
        type: 'fill',
        source: 'landelevation',
        'source-layer': 'landelevation_100x100',
        paint: {
          'fill-color': {
            property: 'value',
            stops: [
              [2, '#ffffcc'],
              [17, '#c7e9b4'],
              [35, '#7fcdbb'],
              [52, '#41b6c4'],
              [70, '#1d91c0'],
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
        id: 'radius',
        type: 'fill',
        source: 'radius',
        'source-layer': 'radius',
        // layout: {
        //   visibility: 'none',
        // },
        paint: {
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
          // 'circle-stroke-color': '#888888',
          // 'circle-stroke-width': 1,
          'fill-color': '#ffffff',
        },
      });

      this.map.addLayer({
        id: 'evacuation',
        type: 'symbol',
        source: 'evacuation',
        'source-layer': 'evacuation_centers',
        layout: {
          visibility: 'none',
          'icon-image': '{icon}-15',
          'icon-allow-overlap': true,
          'text-field': '{amenity}',
          'text-font': ['Open Sans Bold'],
          'text-size': 10,
          'text-transform': 'lowercase',
          'text-letter-spacing': 0.05,
          'text-offset': [0, 1.5],
        },
        paint: {
          'text-color': '#202',
          'text-halo-color': '#fff',
          'text-halo-width': 2,
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

      this.map.addLayer({
        id: 'buildings',
        type: 'fill',
        source: 'buildings',
        'source-layer': 'marikina_buildings_features',
        paint: {
          'fill-color': '#38316e',
          'fill-opacity': 0,
          'fill-outline-color': '#38316e',
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'labels',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {
                name: 'Marikina River',
                size: 12,
              },
              geometry: {
                type: 'Point',
                coordinates: [121.08634085311045, 14.634044503866145],
              },
            },
            {
              type: 'Feature',
              properties: {
                name: 'Marikina City',
                size: 20,
              },
              geometry: {
                type: 'Point',
                coordinates: [121.10887595008319, 14.652422188794105],
              },
            }],
          },
        },
        layout: {
          'text-field': '{name}',
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': ['get', 'size'],
          'text-transform': 'uppercase',
          'text-letter-spacing': 0.05,
          'text-offset': [0, 1.5],
        },
        paint: {
          'text-color': '#303',
          'text-halo-color': '#f9f6e7',
          'text-halo-width': 2,
        },
      });
    });


    this.tooltipContainer = document.createElement('div');

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [0, -40],
    }).setLngLat([0, 0]).addTo(this.map);

    this.map.on('click', (e) => {
      console.log(e);
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
    });
    //
    this.map.on('mousemove', (e) => {
      const { chapterName } = this.props;
      const features = this.map.queryRenderedFeatures(e.point, { layers: ['buildings'] });

      if (features.length > 0) {
        const selected = features[0].properties;

        if (selected.building !== undefined) {
          this.map.getCanvas().style.cursor = features.length ? 'default' : '';
        }
      }

      tooltip.setLngLat(e.lngLat);
      this.setTooltip(features, chapterName);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { chapterName, amenity, buildingType, layer } = this.props;

    if (this.map.isStyleLoaded()) {
      if (nextProps.chapterName !== chapterName) {
        const { paint, layout, position } = chapters[nextProps.chapterName];

        paint.forEach((data) => {
          // this.map.setLayoutProperty(data.id, 'visibility', data.visibility);
          const layer = this.map.getLayer(data.id);

          if (layer !== undefined) {
            const layerType = layer.type;
            this.map.setPaintProperty(data.id, `${layerType}-opacity`, data.opacity);
          }
        });

        layout.forEach((data) => {
          this.map.setLayoutProperty(data.id, 'visibility', data.visibility);
        })

        this.map.easeTo(position);

        // Try filter buildings based on chapterName
        if (nextProps.chapterName === 'typhoon') {
          this.map.setFilter('buildings', ['<=', 'fhm005yrs', 2]);
        } else {
          this.map.setFilter('buildings', undefined);
        }
      }

      if (nextProps.amenity) {
        if (nextProps.amenity !== amenity) {
          if (nextProps.amenity !== 'all') {
            this.map.setFilter('evacuation', ['==', 'amenity', nextProps.amenity]);
          } else {
            this.map.setFilter('evacuation', undefined);
          }
        }
      }

      if (nextProps.buildingType) {
        if (nextProps.buildingType !== buildingType) {
          this.map.setFilter('buildings', ['==', 'building', nextProps.buildingType]);
        }
      }

      if (nextProps.layer) {
        if (nextProps.layer !== layer) {
          const current = this.map.getLayer(layer);
          const newlayer = this.map.getLayer(nextProps.layer)

          if (current !== undefined) {
            const layerType = current.type;
            this.map.setPaintProperty(layer, `${layerType}-opacity`, 0);
          }

          if (current !== undefined) {
            const layerType = newlayer.type;
            this.map.setPaintProperty(nextProps.layer, `${layerType}-opacity`, 0.7);
          }
        }
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
  setTooltip(features, chapterName) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          MapTooltip, {
            features, chapterName
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
      // height: '100vh',
      // width: '100vw',
      position: 'fixed',
      width: '70%',
      left: '30%',
      top: 0,
      bottom: 0,
    };

    const { chapterName, layer } = this.props;

    return (
      <div>
        <div style={mapStyle} ref={(el) => { this.mapContainer = el; }} />
        <Legend chapterName={chapterName} layer={layer} />
      </div>
    );
  }
}

Map.propTypes = {
  chapterName: PropTypes.string.isRequired,
  buildingType: PropTypes.string.isRequired,
  amenity: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
};
