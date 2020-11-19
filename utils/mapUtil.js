import mapRef from '~/mapRef.js';
import routes from '~/data-layer/routes';

export let createCustomIcon = () =>
  L.Icon.extend({
    options: {
      iconSize: [32, 32],
      //shadowSize: [32, 32],
      iconAnchor: [16, 32],
      //shadowAnchor: [4, 40],
      popupAnchor: [1, -32],
      className: 'custom-icon',
    },
  });

export let createCustomIconSmall = () =>
  L.Icon.extend({
    options: {
      iconSize: [20, 20],
      iconAnchor: [10, 20],
      popupAnchor: [1, -20],
    },
  });

export let createDivShipMarker = data => {
  if (!data || !data.position) return null;
  let rotate = 0;
  let isMoving = false;
  if (data.navigation && data.navigation.heading) {
    rotate = Number(data.navigation.heading) || 0;
    rotate %= 360;
  }
  if (data.navigation && data.navigation.speed)
  {
    isMoving = true;
  }

  let icon = L.divIcon({
    className: 'ship-div-marker-icon',
    //bgPos: [0, 0],
    html: `<div class="ship-div-marker-icon__content" id="shipDivMarkerContent${
      data.imo
    }">
            <div class="ship-div-marker-icon__name">${
              data.name
                ? data.name.replace('Seaways', '').replace('Côte des', '')
                : ''
            }</div>

            <div class="js ship-div-marker-icon__direction" data-rotate="${rotate}" style="transform: rotate(${rotate}deg)">
              <div class="${isMoving ? 'moving' : ''}">&#x2191</div>
            </div>
        </div>`,
  });
  let marker = L.marker([data.position.lat, data.position.lng], {
    icon,
    title: data.name,
    alt: data.name,
    //zIndexOffset: 1000,
  });

  marker.shipImo = data.imo;
  marker.isDivShipMarker = true;
  return marker;
};

export let createShipMarker = data => {
  if (!data || !data.position) return null;

  let svg = createSvgShip();

  /*
    For data URI SVG support in Firefox & IE it's necessary to URI encode the string
    & replace the '#' character with '%23'. `encodeURI()` won't do this which is
    why `replace()` must be used on the string afterwards.
  */
  let url = encodeURI('data:image/svg+xml,' + svg).replace('#', '%23');

  let CustomIcon = createCustomIcon();

  let icon = new CustomIcon({ iconUrl: url });

  let marker = L.marker([data.position.lat, data.position.lng], {
    icon,
    title: data.name,
    alt: data.name,
    zIndexOffset: 1000,
  });
  marker.shipImo = data.imo;
  marker.isShipMarker = true;
  return marker;
};

export let createPortMarker = data => {
  if (!data.position) return null;

  let svg = createSvgPort({ icon: '#002b45' });

  /*
    For data URI SVG support in Firefox & IE it's necessary to URI encode the string
    & replace the '#' character with '%23'. `encodeURI()` won't do this which is
    why `replace()` must be used on the string afterwards.
  */

  let url = encodeURI('data:image/svg+xml,' + svg).replace('#', '%23');

  let CustomIcon = createCustomIconSmall();

  let icon = new CustomIcon({ iconUrl: url });

  let marker = L.marker([data.position.lat, data.position.lng], {
    icon,
    title: data.name,
    alt: data.name,
    zIndexOffset: 0,
  });

  marker.isPortMarker = true;
  return marker;
};

export let createSvgShip = ({
  mark = 'white',
  ship = '#002b45',
} = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
s<path fill="${mark}" d="M6.074 12.889c0-5.963 4.852-10.815 10.815-10.815s10.815 4.851 10.815 10.815c0 2.312-1.438 5.798-3.886 9.497-.427-.263-1.012-.546-1.567-.546-1.038 0-1.143 1.024-2.19 1.024s-2.086-1.023-3.129-1.023l-.021-.002c-1.043 0-2.099 1.024-3.147 1.024s-1.084-1.024-2.122-1.024c-.567 0-1.156.295-1.576.563-2.546-3.771-3.992-7.194-3.992-9.514zM16.889 0C9.782 0 4 5.782 4 12.889c0 4.318 3.74 9.903 5.348 12.103.524.718 5.188 7.008 7.541 7.008 3.293 0 12.889-12.284 12.889-19.111C29.778 5.782 23.996 0 16.889 0z"></path>
<path fill="${ship}" d="M17.486 11.565c2.31.275 5.998 2.627 5.998 4.445l-1.49 4.796c-.687.22-.898.965-1.794.965-.989 0-2.062-.909-3.047-1.015l.333-9.191zm-6.988 4.445c0-1.818 3.689-4.17 5.998-4.445l.333 9.191c-.985.107-2.058 1.016-3.047 1.016-.896 0-1.106-.745-1.794-.966l-1.49-4.796zm1.929-6.014h9.066l-.025-.053c-.441-.936-.764-.917-3.138-.917h-2.741c-2.374 0-2.696-.019-3.138.917l-.025.053zm5.891-2.497h5.969l-.53 1.709h-1.291l.93 5.524c-.695-.948-1.887-2.263-3.134-2.981 1.5-.064 1.791-.293 1.515-1.089h-9.632c-.267.768-.005 1.008 1.363 1.082-1.415.806-2.594 2.318-3.115 3.425l1.091-5.961h-1.291l-.53-1.709h5.969l.904-3.454h.879l.905 3.454z"></path>
</svg>`;

export let createSvgPort = ({ icon = 'black' } = {}) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
    <path fill="${icon}" d="M26.702 16.457l5.224 14.629H.074l5.225-14.629h4.836c.327.624.66 1.235.993 1.829h-4.54L2.669 29.257h26.662l-3.918-10.971h-4.476c.334-.593.666-1.205.993-1.829h4.772zM16.033.914c3.931 0 7.118 3.187 7.118 7.119s-7.118 14.824-7.118 14.824S8.915 11.963 8.915 8.033A7.118 7.118 0 0 1 16.033.914zm0 9.617a2.996 2.996 0 1 0 0-5.993 2.996 2.996 0 0 0 0 5.993z"></path>
</svg>
`;

export let addShipMarkerToMap = ({ map, marker, ship }) => {
  marker
    .addTo(map)
    .bindPopup(
      `<div class="leaflet-popup-content-detail"><pre>${JSON.stringify(
        ship,
        null,
        1
      )}</pre></div>`
    );
};

export let addPortMarkerToMap = ({ map, marker, port }) => {
  marker
    .addTo(map)
    .bindPopup(
      `<div class="leaflet-popup-content-detail"><pre>${JSON.stringify(
        port,
        null,
        1
      )}</pre></div>`
    );
};

export let addShipsToMap = ({ ships, map }) => {
  ships &&
    ships.length &&
    ships.forEach(ship => {
      let marker = createShipMarker(ship);
      if (marker) addShipMarkerToMap({ marker, ship, map });

      let divMarker = createDivShipMarker(ship);
      if (divMarker) divMarker.addTo(map);
    });
};

export let addPortsToMap = ({ ports, map }) => {
  ports &&
    ports.length &&
    ports.forEach(port => {
      let marker = createPortMarker(port);
      if (marker) addPortMarkerToMap({ map, marker, port });
    });
};

export let addRoutes = ({ map }) => {
  // https://www.dfds.com/en/passenger-ferries

  routes.forEach(route => {
    if (route.latlngs) {
      L.polyline(route.latlngs, {
        color: '#4d4e4c',
        weight: 1,
        opacity: 0.2,
        dashArray: '10 10',
        className: 'ship-route',
      }).addTo(map);
    }
  });
};

export let zoomToShip = ship => {
  let map = mapRef.get();
  map &&
    ship.position &&
    map.setView([ship.position.lat, ship.position.lng], 9);
};

export let zoomToTerminal = terminal => {
  let map = mapRef.get();
  map &&
    terminal.position &&
    map.setView([terminal.position.lat, terminal.position.lng], 9);
};

export const tileLayerMapbox = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=${process.env.mapBoxToken}`;
export const tileLayerOpenStreetMaps =
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
