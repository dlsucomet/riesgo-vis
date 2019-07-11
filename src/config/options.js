const chapters = {
  marikina: {
    layers: [
      {
        id: 'landelevation3d',
        visibility: 'visible',
      },
      {
        id: 'flood',
        visibility: 'none',
      },
      {
        id: 'evac_center',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 45,
      bearing: -17.6,
    },
  },
  typhoon: {
    layers: [
      {
        id: 'landelevation3d',
        visibility: 'none',
      },
      {
        id: 'flood',
        visibility: 'visible',
      },
      {
        id: 'evac_center',
        visibility: 'none',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
    },
  },
  evacuation: {
    layers: [
      {
        id: 'landelevation3d',
        visibility: 'none',
      },
      {
        id: 'flood',
        visibility: 'visible',
      },
      {
        id: 'evac_center',
        visibility: 'visible',
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
    },
  },
  population: {

  },
  accessibility: {

  },
};

const legendLabels = {
  flood: 'Flood Hazard Levels',
  landelevation3d: 'Land Elevation',
};

export { chapters, legendLabels };
