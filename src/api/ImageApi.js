import {config} from '../../config'

export function sendImage ({token, source64, username}) {
    fetch(config.API_URL+'/images/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          id: 0, // should be ignore
          idDisease: 50, // or some defaut
          url: source64,
          description: '',
          source: username+ '\'s device',
          size: 1 //any
        }),
      }).then(response => response.json())
        .catch(error => console.error()); 
}  