const center = [121.10719934846895, 14.642017161220147];

const chapters = {
  marikina: {
    paint: [
      {
        id: 'boundary',
        opacity: 0.5,
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
        id: 'roaddistance',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
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
      zoom: 12.5,
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
        opacity: 0.5,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'landelevation',
        opacity: 0.7,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'roaddistance',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      // pitch: 45,
      // bearing: -17.6,
      pitch: 0,
      bearing: 0,
      zoom: 12.5,
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
        opacity: 0.5,
      },
      {
        id: 'flood',
        opacity: 0.7,
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
        id: 'roaddistance',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      center: [121.0974737857415, 14.651397521228759],
      zoom: 14.5,
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
        opacity: 0.7,
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
        id: 'roaddistance',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
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
      zoom: 12.5,
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
        opacity: 1,
      },
      {
        id: 'radius',
        opacity: 0.3,
      },
      {
        id: 'roaddistance',
        opacity: 0,
      },
    ],
    layout: [
      {
        id: 'labels',
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
      zoom: 12.5,
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
        id: 'roaddistance',
        opacity: 0.9,
      },
    ],
    layout: [
      {
        id: 'labels',
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
      zoom: 12.5,
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
          value: 'house',
        },
        {
          label: 'Condominium',
          value: 'residential',
        },
        {
          label: 'Office Building',
          value: 'commercial',
        },
        {
          label: 'School',
          value: 'school',
        },
        {
          label: 'Retail',
          value: 'retail',
        },
        {
          label: 'College',
          value: 'college',
        },
        {
          label: 'Mall',
          value: 'mall',
        },
        {
          label: 'Hospital',
          value: 'hospital',
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
    name: 'Flood Hazard ',
    colors: ['#ffffb2', '#fecc5c', '#fd8d3c', '#e31a1c'],
    min: 'Low',
    max: 'High',
    range: false,
  },
};

const chapterLayers = {
  land: ['landelevation3d'],
  typhoon: ['flood'],
  evacuation: ['flood', 'landelevation'],
};

export {
  chapters, legendLabels, filters, legendOptions, chapterLayers,
};
