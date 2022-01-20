import './css/styles.css';
import Notiflix from 'notiflix';
import cards from './cards.hbs';
const DEBOUNCE_DELAY = 300;

const refs = {
    formSearch: document.querySelector('#search-box'),
    counnryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};
// console.log(refs.formSearch);
// console.log(refs.counnryList);
// console.log(refs.countryInfo);
function httpInquiry (name) {
    const SEARCH_URL = 'https://restcountries.com/v3.1/name/${name}';
    const filter = '?fields=name,capital,population,flags,languages';
    // const { name } = refs.formSearch.elements;
    fetch('${SEARCH_URL}${filter}')
        .then(response => {
            return response.json();
        })
        .then(name => {
            console.log(name);
            const markup = cards(name);
            console.log(markup);
        })
        .catch(error => {
            console.log(error);
        });
   
};
httpInquiry()
 








// refs.formSearch.addEventListener('submit', onSearch)

// function onSearch(e) {
//     e.preventDefoult();
//     const form = e.currentTarget;
//     const serchQuuery = form.elements.query.value;

//     // console.log(form.elements);
// httpInquiry (serchQuuery)
// };


// function renderList(svg) {
//     const items = []
//     refs.counnryList.innerHTML = '';
//     refs.counnryList.insertAdjacentHTML("beforebegin", items.join(''));
// }

// function onSearch() {
    
// };
// function renderCard(name) {
        
//     }
//  function httpInquiry(name) {
//   const BASE_URL = 'https://restcountries.com/v3.1/name/';
//   const filter = '?fields=name,capital,population,flags,languages';
  
//   return fetch(`${BASE_URL}${name}${filter}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status)
//       }
//       return response.json()
//     })
//   }

// httpInquiry()
