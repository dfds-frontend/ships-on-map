import fetch from 'isomorphic-unfetch';

import { apiBaseUrl } from '~/constants/urls';
import { getShipNameByIMO } from '~/constants/shipNames';

const options = {
  headers: {
    Accept: 'application/json',
  },
};

export default async function getShipsFromApi({ useProxy = true } = {}) {
  try {
    let url = useProxy
      ? `${apiBaseUrl}/get-ships?v=${Date.now()}`
      : `https://api.hellman.oxygen.dfds.cloud/prod/vessel/api/v1/Ships?v=${Date.now()}`;

    if (process.env.NODE_ENV === 'development') {
      url = `${apiBaseUrl}/mock-ships`;
    }

    const response = await fetch(url, options);
    let json = (await response.json()) || [];

    json.forEach(ship => {
      if (!ship.name) ship.name = getShipNameByIMO(ship.imo);
      if (!ship.name) ship.name = `imo ${ship.imo}`;
    });

    return json;
  } catch (ex) {
    console.error(ex.toString());
    return [];
  }
}
