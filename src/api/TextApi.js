import {config} from '../../config'


/** this function didn't was tested */
export function getContent({commomname, statusHelthy}){
  const atributes = ["commonName","scientificName", "description", "sintoms", "bioeco", "control"]  
  var text_content = {};
  return atributes.map((atribute) => {
    text_content[atribute] = getText(commomname, statusHelthy, atribute, config.LANG)
  }).then(text_content => text_content.json());
}

function getText({commomname, statusHelthy, atribute, language}) {
  return fetch(config.API_URL+'/texts/?action=search&plant='+commomname+'&status='+statusHelthy+'&atribute='+atribute+'&language='+language+'&pageSize=1&offset=0', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
  }).then(response => response.json())
      .catch(error => console.error(error));
}
