  import './css/styles.css';
  import Notiflix from 'notiflix';
  import { fetchCountry } from './js/fetchCountries';

  const debounce = require('lodash.debounce');

  const DEBOUNCE_DELAY = 300;

   
  Notiflix.Notify.init({});

  const searchBox = document.querySelector("#search-box");
  const ulCountry = document.querySelector(".country-list");
  const divInfo = document.querySelector(".country-info");
  
   

  ulCountry.style.listStyle = 'none';
   
   

  searchBox.addEventListener("input", debounce(onInput, 1300));

  function onInput() {
    let searchCountry = searchBox.value;
     searchCountry = searchCountry.trim();
    if ( searchCountry === !' ' || searchCountry.length === 0  ) {
      Notiflix.Notify.failure('Введите название страны');
      // searchBox.removeEventListener("input", onInput);
       
      setTimeout(() => {
        location.reload();
      }, 2000) 
        
     }  
          

    fetchCountry(searchCountry).then(renderCountry).catch( error => {
      Notiflix.Notify.failure(' Ой такой страны нету');
   });
 ; 
    
     
  }

  
  function renderCountry(name) {     
     
    const markup = name.map((names) => {

      
      return `<li style = "border: 1px solid blue; border-radius: 4px; background-color: yellow; margin-bottom: 5px; width: 300px;"><p style="padding-bottom: 10px;"><b><img src=${names.flags.svg} width="30" height="30" style="margin: 3px;">${names.name}</b></p></li>`;
      
    }).join("");
     
    ulCountry.innerHTML = markup;
     
    
    if (  name.length === 1  ) {
      let markups = name.map((elem) => {
      
      return `<p><b>Capital: ${elem.capital}</b></p>
              <p><b>Population: ${elem.population}</b></p>
              <p><b>Languages: ${elem.languages[0].name}</b></p>`
      
    }).join('');
  
    divInfo.innerHTML = markups;
  }

   if (name.length >= 10) {
      Notiflix.Notify.info('Пожалуйста, введите более конкретное имя.');
     }

     
    
  }
 
 

  
     

   
    