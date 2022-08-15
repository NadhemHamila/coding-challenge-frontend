const serviceEndpoint = 'http://127.0.0.1:5001';

export const addNumber = async (numberToAdd) => {
    await fetch(
      `${serviceEndpoint}/add`,
      
      {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            "number": numberToAdd
        })
      }
    )
    .then((response) => response.json())
}

export const retrieveData = () => {
  if (fetch(
    `${serviceEndpoint}/sample10`,
    
    {
      method: 'GET',
      headers: new Headers({'content-type': 'application/json'}),
    }
  )===[]){ }
  else{
    return fetch(
      `${serviceEndpoint}/sample10`,
      
      {
        method: 'GET',
        headers: new Headers({'content-type': 'application/json'}),
      }
    ).then((response) => response.json());
  }}