import {config} from '../../config'

export function createAnalisys ({token, idImagem, idClassifier, idUser}) {
    fetch(config.API_URL+'/analysis/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          idImage: idImagem,
          idClassifier: idClassifier,
          idUser: idUser
        }),
      }).then(response => response.json())
        .catch( (error) => { 
          if (error.includes("Network")) {
            // know error, the analysis was created
            resp = this.getAnalisys(idImagem, idUser) 
           .then(resp => resp.json())
           .catch (err => console.error(err))
          } else {
            console.error(error);
          }   
       });
}

export function getAnalisys ({idImage, idUser}) {
    fetch(config.API_URL+'/analysis/?action=search&idImage='+idImage+'&idUser='+idUser, {
        method: 'GET',
        headers: {
        'Accept': 'application/json'
        }
    }).then(response => response.json())
      .catch(error => console.error(error));
}
export function getUserAnalisys (idUser) {
  return fetch(config.API_URL+'/analysis/?action=search&idUser='+idUser, {
      method: 'GET',
      headers: {
      'Accept': 'application/json'
      }
  }).then((response) => response.json())
    .catch(error => console.error(error));
}

export function getAnalisysById ({idAnalisys}) {
    fetch(config.API_URL+'/analysis/?action=searchByID&id='+idAnalisys, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
    }).then((response) => response.text())
      .catch(error =>console.error());    
}
