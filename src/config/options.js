const chapters = {
  marikina: {
    layers: [
      {
        id: 'landelevation3d',
        opacity: 1,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'evac_center',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'roaddistance',
        opacity: 0
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
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0.7,
      },
      {
        id: 'evac_center',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'roaddistance',
        opacity: 0
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
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0.7,
      },
      {
        id: 'evac_center',
        opacity: 1,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'roaddistance',
        opacity: 0
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
    },
  },
  population: {
    layers: [
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'evac_center',
        opacity: 0,
      },
      {
        id: 'population',
        opacity: 1,
      },
      {
        id: 'roaddistance',
        opacity: 0
      },
    ],
    position: {
      pitch: 0,
      bearing: 0,
    },
  },
  accessibility: {
    layers: [
      {
        id: 'landelevation3d',
        opacity: 0,
      },
      {
        id: 'flood',
        opacity: 0,
      },
      {
        id: 'evac_center',
        opacity: 1,
      },
      {
        id: 'population',
        opacity: 0,
      },
      {
        id: 'roaddistance',
        opacity: 0.9,
      },
    ],
  },
};

const legendLabels = {
  flood: 'Flood Hazard Levels',
  landelevation3d: 'Land Elevation',
};

export { chapters, legendLabels };
