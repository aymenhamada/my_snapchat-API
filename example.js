const email = 'johndoes@gmail.com';
const password = 'blablabla';



fetch('http://localhost:4242/register', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email,
        password
    }),
}).then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.error){
            let error = "";
            responseJson.error.forEach(err => {
                error = `${error}\n${err}`;
            })
            console.log(error);
            //Show the error with the client.
        }
        //if no error just log the client
        console.log(responseJson);
    })
    .catch((error) => {
        console.log(error);
    })
