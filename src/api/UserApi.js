import {config} from '../../config'

// always you will need a token, then for cases as Password recovery we need get de user with chekEmail function,
// generate the token, and update the user record with the new generated password
export function userUpdate ({token, userId, userEmail, username, dateInsertion, password}) {
    fetch(config.API_URL+'/users/', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          id: userId,
          idType: 1,
          email: userEmail,
          username: username,
          password: password,
          salt: 'salt',
          dateInsertion: dateInsertion,
          dateUpdate: new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear()
        }),
    }).then(response => response.json())
      .catch(error => console.error(error)); 
}

export function checkEmail ({username, email}) {
    fetch(config.API_URL+'/users/?action=search&username='+ username +'&email=' + email + '&pageSize=1&offset=0', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }).then(response => response.json())
      .catch(error => console.error(error));    
}

export function sendEmail ({email, generatedCode}) {
    fetch(config.API_URL+'/messages/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userEmail: email, coreVerification: generatedCode})
    }).then(response => response.json())
      .catch(error => console.error(error));
}

export function createUser ({}) {
    fetch(config.API_URL+'/users/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password, 
          salt: 'salt',
          dateInsertion: new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
          dateUpdate: new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),
          idType: 1
        })
    }).then(response => response.json())
      .catch(error => console.error(error));
}