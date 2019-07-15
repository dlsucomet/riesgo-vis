const center = [121.10270229817115, 14.639452415446272];
const pitch = 60;
const bearing = 0.13;
const zoom = 12.5;

const chapters = {
  marikina: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0.5,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capacity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'visible',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      pitch,
      bearing,
      zoom: 12.7,
      center,
      duration: 800,
    },
  },
  land: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 1,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0.5,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capacity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  typhoon: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 1,
      },
      {
        id: 'flood',
        opacity: 0.6,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capacity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      // center: [121.0974737857415, 14.651397521228759],
      // zoom: 14.5,
      center,
      zoom,
      bearing: 0,
      pitch: 0,
      duration: 800,
    },
  },
  evacuation: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0.6,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capacity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'visible',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  population: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0.9,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capacity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  coverage: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0.7,
      },
      {
        id: 'capacity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'visible',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  capacity: {
    paint: [
      {
        id: 'boundary',
        opacity: 1,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capacity',
        opacity: 0.5,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'visible',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  accessibility: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0.1,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capacity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0.7,
      },
      {
        id: 'suitability',
        opacity: 0,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'visible',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  suitability: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capcity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0.7,
      },
      {
        id: 'aoe',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  'good-place': {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capcity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0.7,
      },
      {
        id: 'aoe',
        opacity: 1,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'visible',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
  conclusion: {
    paint: [
      {
        id: 'boundary',
        opacity: 0,
      },
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'buildings',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0,
      },
      {
        id: 'radius',
        opacity: 0,
      },
      {
        id: 'capcity',
        opacity: 0,
      },
      {
        id: 'walking',
        opacity: 0,
      },
      {
        id: 'suitability',
        opacity: 0.7,
      },
      {
        id: 'aoe',
        opacity: 1,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'aoe_labels',
        visibility: 'visible',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
      zoom,
      center,
      duration: 800,
    },
  },
};

const legendLabels = {
  flood: 'Flood Hazard Levels',
  landelevation3d: 'Land Elevation',
};

const filters = {
  land: [
    {
      hasAll: true,
      value: 'buildingType',
      label: 'Building Type',
      onChange: 'updateBuildingType',
      options: [
        {
          label: 'Residential',
          value: 'residential',
        },
        {
          label: 'Private',
          value: 'private',
        },
        {
          label: 'Health',
          value: 'health',
        },
        {
          label: 'Education',
          value: 'education',
        },
      ],
    },
  ],
  typhoon: [
    {
      hasAll: false,
      value: 'floodYear',
      label: 'Flood Hazard Return Period',
      onChange: 'updateFloodYear',
      options: [
        {
          label: '5-year',
          value: 'fhm005yrs',
        },
        {
          label: '25-year',
          value: 'fhm025yrs',
        },
        {
          label: '100-year',
          value: 'fhm100yrs',
        },
      ],
    },
  ],
  evacuation: [
    {
      hasAll: true,
      value: 'amenity',
      label: 'Evacuation Centers',
      onChange: 'updateAmenity',
      options: [
        {
          label: 'Community Centre',
          value: 'community_centre',
        },
        {
          label: 'Basketball Court',
          value: 'basketball_court',
        },
        {
          label: 'School',
          value: 'school',
        },
      ],
    },
    {
      hasAll: false,
      value: 'layer',
      label: 'Toggle Layer',
      onChange: 'updateLayer',
      options: [
        {
          label: 'Land Elevation',
          value: 'landelevation',
        },
        {
          label: 'Flood Hazard Map',
          value: 'flood',
        },
      ],
    },
  ],
  coverage: [
    {
      hasAll: true,
      value: 'amenity',
      label: 'Evacuation Centers',
      onChange: 'updateAmenity',
      options: [
        {
          label: 'Community Centre',
          value: 'community_centre',
        },
        {
          label: 'Basketball Court',
          value: 'basketball_court',
        },
        {
          label: 'School',
          value: 'school',
        },
      ],
    },
  ],
  capacity: [
    {
      hasAll: true,
      value: 'amenity',
      label: 'Evacuation Centers',
      onChange: 'updateAmenity',
      options: [
        {
          label: 'Community Centre',
          value: 'community_centre',
        },
        {
          label: 'Basketball Court',
          value: 'basketball_court',
        },
        {
          label: 'School',
          value: 'school',
        },
      ],
    },
  ],
  accessibility: [
    {
      hasAll: true,
      value: 'amenity',
      label: 'Evacuation Centers',
      onChange: 'updateAmenity',
      options: [
        {
          label: 'Community Centre',
          value: 'community_centre',
        },
        {
          label: 'Basketball Court',
          value: 'basketball_court',
        },
        {
          label: 'School',
          value: 'school',
        },
      ],
    },
    {
      hasAll: false,
      value: 'minutes',
      label: 'Minutes to Walk',
      onChange: 'updateMinutes',
      options: [
        {
          label: '5',
          value: 5,
        },
        {
          label: '10',
          value: 10,
        },
        {
          label: '15',
          value: 15,
        },
        {
          label: '20',
          value: 20,
        },
        {
          label: '25',
          value: 25,
        },
        {
          label: '30',
          value: 30,
        },
      ],
    },
  ],
  suitability: [
    {
      hasAll: false,
      value: 'suitabilityYear',
      label: 'Suitability Return Period',
      onChange: 'updateSuitabilityYear',
      options: [
        {
          label: '5-year',
          value: 'mcda005yrs',
        },
        {
          label: '25-year',
          value: 'mcda025yrs',
        },
        {
          label: '100-year',
          value: 'mcda100yrs',
        },
      ],
    },
  ],
  'good-place': [
    {
      hasAll: false,
      value: 'suitabilityYear',
      label: 'Suitability Return Period',
      onChange: 'updateSuitabilityYear',
      options: [
        {
          label: '5-year',
          value: 'mcda005yrs',
        },
        {
          label: '25-year',
          value: 'mcda025yrs',
        },
        {
          label: '100-year',
          value: 'mcda100yrs',
        },
      ],
    },
  ],
  conclusion: [
    {
      hasAll: false,
      value: 'suitabilityYear',
      label: 'Suitability Return Period',
      onChange: 'updateSuitabilityYear',
      options: [
        {
          label: '5-year',
          value: 'mcda005yrs',
        },
        {
          label: '25-year',
          value: 'mcda025yrs',
        },
        {
          label: '100-year',
          value: 'mcda100yrs',
        },
      ],
    },
  ],
};

const tooltipConfig = {
  marikina: {
    layer: 'landelevation3d',
    features: [
      {
        label: 'meters above sea level',
        value: 'value',
        type: 'inline',
      },
    ],
  },
  land: {
    layer: 'buildings',
    features: [
      {
        label: 'Building Type',
        value: 'category',
      },
    ],
  },
  typhoon: {
    layer: 'buildings',
    features: [
      {
        label: 'Building Type',
        value: 'category',
      },
    ],
  },
  evacuation: {
    layer: 'evacuation',
    features: [
      {
        label: 'Name',
        value: 'name',
        type: 'title',
      },
      {
        label: 'Capacity',
        value: 'capacity',
      },
    ],
  },
  coverage: {
    layer: 'evacuation',
    features: [
      {
        label: 'Name',
        value: 'name',
        type: 'title',
      },
      {
        label: 'Population Coverage (400-m)',
        value: 'pop_coverage',
      },
    ],
  },
  capacity: {
    layer: 'evacuation',
    features: [
      {
        label: 'Name',
        value: 'name',
        type: 'title',
      },
      {
        label: 'Population Coverage (400-m)',
        value: 'pop_coverage',
      },
      {
        label: 'Capacity',
        value: 'capacity',
      },
    ],
  },
  accessibility: {
    layer: 'evacuation',
    features: [
      {
        label: 'Name',
        value: 'name',
      },
      {
        label: 'Capacity',
        value: 'capacity',
      },
    ],
  },
};

const legendOptions = {
  landelevation3d: {
    name: 'Land Elevation (m)',
    colors: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0'],
    min: 2,
    max: 70,
    range: true,
  },
  landelevation: {
    name: 'Land Elevation (m)',
    colors: ['#ffffcc', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0'],
    min: 2,
    max: 70,
    range: true,
  },
  flood: {
    name: 'Flood Hazard',
    colors: [
      {
        label: 'Marginal',
        color: '#ffffb2',
      },
      {
        label: 'Low',
        color: '#fecc5c',
      },
      {
        label: 'Medium',
        color: '#fd8d3c',
      },
      {
        label: 'High',
        color: '#e31a1c',
      },
    ],
    range: false,
  },
  population: {
    name: 'Population (per pixel) (40 sqm)',
    colors: ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],
    min: 13,
    max: 24,
    range: true,
  },
  radius: {
    name: 'Population Coverage',
    colors: ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],
    min: '5,700',
    max: '13,900',
    range: true,
  },
  capacity: {
    name: 'Estimated Capacity',
    colors: ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],
    min: '120',
    max: '2,750',
    range: true,
  },
  suitability: {
    name: 'Suitability',
    colors: [
      {
        label: 'Unsafe',
        color: '#000000',
      },
      {
        label: 'Very Low',
        color: '#b2182b',
      },
      {
        label: 'Low',
        color: '#ef8a62',
      },
      {
        label: 'High',
        color: '#67a9cf',
      },
      {
        label: 'Very High',
        color: '#2166ac',
      },
    ],
    range: false,
  },
};

const chapterLayers = {
  marikina: ['landelevation3d'],
  land: ['landelevation'],
  typhoon: ['flood'],
  evacuation: ['flood', 'landelevation'],
  population: ['population'],
  coverage: ['radius'],
  capacity: ['capacity'],
  suitability: ['suitability'],
  'good-place': ['suitability'],
  conclusion: ['suitability'],
};

const floodStops = [
  [1, '#e31a1c'],
  [2, '#fd8d3c'],
  [3, '#fecc5c'],
  [4, '#ffffb2'],
];

const suitabilityStops = [
  [1, '#000000'],
  [2, '#b2182b'],
  [3, '#ef8a62'],
  [4, '#67a9cf'],
  [5, '#2166ac'],
];

const isoStops = [
  [30, '#bd0026'],
  [25, '#f03b20'],
  [20, '#fd8d3c'],
  [15, '#feb24c'],
  [10, '#feb24c'],
  [5, '#feb24c'],
];

export {
  chapters, legendLabels, filters, legendOptions, chapterLayers, floodStops,
  suitabilityStops, tooltipConfig, isoStops,
};
