import {config} from '../../config'

export function authenticate ({creds}) {
    return fetch( config.API_URL+'/token/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + creds
        }
    }).then(response => response.json())
      .catch(error => console.error(error));
}