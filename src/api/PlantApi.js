import {config} from '../../config'

export function getPlant ({ plantCommomName }) {
    return  fetch(config.API_URL+'/plants/?action=search&commonName=' + plantCommomName + '&pageSize=10&offset=0', {
        headers: {
            'Accept': 'application/json',
        }
    }).then(response => response.json())
      .catch(error => console.error(error));
}
