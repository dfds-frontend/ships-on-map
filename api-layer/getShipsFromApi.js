import fetch from 'isomorphic-unfetch';
import { apiBaseUrl } from '~/constants/urls';

const options = {
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export default async function getShipsFromApi() {
  try {
    let url = `https://api.hellman.oxygen.dfds.cloud/dev/vessel/api/v1/Ships`;
    url = `${apiBaseUrl}/mock-ships`;
    url = `${apiBaseUrl}/get-ships`;

    const response = await fetch(url, options);
    let json =  await response.json();

    //console.log(json);

    return json;
  } catch (ex) {
    console.error(ex.toString());
    return null;
  }
}