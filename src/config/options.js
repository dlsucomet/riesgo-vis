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

export { chapters, legendLabels };
