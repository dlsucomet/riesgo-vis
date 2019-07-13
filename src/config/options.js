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
        opacity: 1,
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
        visibility: 'none',
      },
      {
        id: 'evacuation',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 45,
      bearing: -17.6,
    },
  },
  typhoon: {
    paint: [
      {
        id: 'landelevation3d',
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
        opacity: 0
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
    },
  },
  evacuation: {
    paint: [
      {
        id: 'landelevation3d',
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
        opacity: 0
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
      pitch: 0,
      bearing: 0,
    },
  },
  population: {
    paint: [
      {
        id: 'landelevation3d',
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
        opacity: 0
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
      pitch: 0,
      bearing: 0,
      duration: 800,
    },
  },
  accessibility: {
    paint: [
      {
        id: 'landelevation3d',
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
        visibility: 'none',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
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
    }
  ],
  typhoon: [
    {
      hasAll: true,
      value: 'amenity',
      label: 'Amenity',
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

const filterLabels = {
  land: 'Amenity',
  typhoon: 'Typhoon',
  evacuation: 'Greenhouse Gas Intensity',
};

export { chapters, legendLabels, filters, filterLabels };
