// https://www.dfds.com/da-dk/shipping/ruter-og-afgange

import terminals from "./terminals";
import arrayToObject from "~/utils/arrayToObject";

const lookup = arrayToObject(terminals, "id");

let data = [
  {
    id: "",
    name: "Copenhagen - Frederikshavn",
    latlngs: [
      [lookup["copenhagen"].position.lat, lookup["copenhagen"].position.lng],
      [lookup["frederikshavn"].position.lat, lookup["frederikshavn"].position.lng]
    ]
  },
  {
    id: "",
    name: "Frederikshavn - Oslo",
    latlngs: [
      [lookup["frederikshavn"].position.lat, lookup["frederikshavn"].position.lng],
      [lookup["oslo"].position.lat, lookup["oslo"].position.lng]
    ]
  },

  {
    id: "",
    name: "Newcastle - Amsterdam",
    latlngs: [
      [lookup["newcastle"].position.lat, lookup["newcastle"].position.lng],
      [lookup["amsterdam"].position.lat, lookup["amsterdam"].position.lng]
    ]
  },
  {
    id: "",
    name: "Dover - Dunkirk",
    latlngs: [
      [lookup["dover"].position.lat, lookup["dover"].position.lng],
      [lookup["dunkirk"].position.lat, lookup["dunkirk"].position.lng]
    ]
  },
  {
    id: "",
    name: "Dover - Calais",
    latlngs: [
      [lookup["dover"].position.lat, lookup["dover"].position.lng],
      [lookup["calais"].position.lat, lookup["calais"].position.lng]
    ]
  },
  {
    id: "",
    name: "Newhaven - Dieppe",
    latlngs: [
      [lookup["newhaven"].position.lat, lookup["newhaven"].position.lng],
      [lookup["dieppe"].position.lat, lookup["dieppe"].position.lng]
    ]
  },
  {
    id: "",
    name: "Kiel - Klaipeda",
    latlngs: [
      [lookup["kiel"].position.lat, lookup["kiel"].position.lng],
      [lookup["klaipeda"].position.lat, lookup["klaipeda"].position.lng]
    ]
  },
  {
    id: "",
    name: "Karlshamn - Klaipeda",
    latlngs: [
      [lookup["karlshamn"].position.lat, lookup["karlshamn"].position.lng],
      [lookup["klaipeda"].position.lat, lookup["klaipeda"].position.lng]
    ]
  },
  {
    id: "",
    name: "Kapellskär - Paldiski",
    latlngs: [
      [lookup["kapellskar"].position.lat, lookup["kapellskar"].position.lng],
      [lookup["paldiski"].position.lat, lookup["paldiski"].position.lng]
    ]
  },
  {
    id: "",
    name: "Hanko - Paldiski",
    latlngs: [
      [lookup["hanko"].position.lat, lookup["hanko"].position.lng],
      [lookup["paldiski"].position.lat, lookup["paldiski"].position.lng]
    ]
  },
  // {
  //   id: '',
  //   name: 'Göteborg - Immingham',
  //   latlngs: [
  //     [lookup['goteborg'].position.lat, lookup['goteborg'].position.lng],
  //     [lookup['immingham'].position.lat, lookup['immingham'].position.lng],
  //   ],
  // },
  // {
  //   id: '',
  //   name: 'Göteborg - Brevik',
  //   latlngs: [
  //     [lookup['goteborg'].position.lat, lookup['goteborg'].position.lng],
  //     [lookup['brevik'].position.lat, lookup['brevik'].position.lng],
  //   ],
  // },
  // {
  //   id: '',
  //   name: 'Göteborg - Gent',
  //   latlngs: [
  //     [lookup['goteborg'].position.lat, lookup['goteborg'].position.lng],
  //     [lookup['gent'].position.lat, lookup['gent'].position.lng],
  //   ],
  // },
  // {
  //   id: '',
  //   name: 'Göteborg - Zeebrugge',
  //   latlngs: [
  //     [lookup['goteborg'].position.lat, lookup['goteborg'].position.lng],
  //     [lookup['zeebrugge'].position.lat, lookup['zeebrugge'].position.lng],
  //   ],
  // },
  {
    id: "",
    name: "Esbjerg - Immingham",
    latlngs: [
      [lookup["esbjerg"].position.lat, lookup["esbjerg"].position.lng],
      [lookup["immingham"].position.lat, lookup["immingham"].position.lng]
    ]
  },
  {
    id: "",
    name: "Rotterdam - Immingham",
    latlngs: [
      [lookup["rotterdam"].position.lat, lookup["rotterdam"].position.lng],
      [lookup["immingham"].position.lat, lookup["immingham"].position.lng]
    ]
  },
  {
    id: "",
    name: "Cuxhaven - Immingham",
    latlngs: [
      [lookup["cuxhaven"].position.lat, lookup["cuxhaven"].position.lng],
      [lookup["immingham"].position.lat, lookup["immingham"].position.lng]
    ]
  },
  {
    id: "",
    name: "Brevik - Immingham",
    latlngs: [
      [lookup["brevik"].position.lat, lookup["brevik"].position.lng],
      [lookup["immingham"].position.lat, lookup["immingham"].position.lng]
    ]
  },
  {
    id: "",
    name: "Brevik - Gent",
    latlngs: [
      [lookup["brevik"].position.lat, lookup["brevik"].position.lng],
      [lookup["gent"].position.lat, lookup["gent"].position.lng]
    ]
  },
  {
    id: "",
    name: "Pendik - Trieste",
    latlngs: [
      [lookup["pendik"].position.lat, lookup["pendik"].position.lng],
      [lookup["trieste"].position.lat, lookup["trieste"].position.lng]
    ]
  },
  {
    id: "",
    name: "Marseille - Tunis",
    latlngs: [
      [lookup["marseille"].position.lat, lookup["marseille"].position.lng],
      [lookup["tunis"].position.lat, lookup["tunis"].position.lng]
    ]
  },
  // {
  //   id: '',
  //   name: 'Klaipeda - Fredericia',
  //   latlngs: [
  //     [lookup['klaipeda'].position.lat, lookup['klaipeda'].position.lng],
  //     [lookup['fredericia'].position.lat, lookup['fredericia'].position.lng],
  //   ],
  // },
  {
    id: "",
    name: "Klaipeda - Copenhagen",
    latlngs: [
      [lookup["klaipeda"].position.lat, lookup["klaipeda"].position.lng],
      [lookup["copenhagen"].position.lat, lookup["copenhagen"].position.lng]
    ]
  },
  {
    id: "",
    name: "Pendik - Bari",
    latlngs: [
      [lookup["pendik"].position.lat, lookup["pendik"].position.lng],
      [lookup["bari"].position.lat, lookup["bari"].position.lng]
    ]
  }
];

export default data;
