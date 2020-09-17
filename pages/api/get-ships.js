// https://api.hellman.oxygen.dfds.cloud/dev/vessel/swagger/index.html
// http://api.dfds.cloud/prod/voyage/swagger/index.html

import fetch from 'isomorphic-unfetch';

export default async function getShips(req, res) {
  async function getShipsFromApi() {
    try {
      let url = `https://api.hellman.oxygen.dfds.cloud/prod/vessel/api/v1/Ships?v=${Date.now()}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    } catch (ex) {
      console.error('get-ships', ex.toString());
      return [];
    }
  }

  let ships = await getShipsFromApi();

  return res.json(ships);
}
