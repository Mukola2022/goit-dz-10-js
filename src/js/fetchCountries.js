 


export function fetchCountry(name) {
  
  return fetch(`https://restcountries.com/v2/name/${name}?flags,svg,languages`)
  .then(response => { 
    if (!response.ok) {       
      throw Error(`is not ok: ` + resp.status);  
      
  } 
  
    return  response.json();
  })     
  
  
}
