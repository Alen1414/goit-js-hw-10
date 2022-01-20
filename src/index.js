import './css/styles.css';
import Notiflix from 'notiflix';
import cards from './cards.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;

const refs = {
    formSearch: document.querySelector('#search-box'),
    counnryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};
// console.log(refs.formSearch);
// console.log(refs.counnryList);
// console.log(refs.countryInfo);

function httpInquiry(name) {
    const SEARCH_URL = `https://restcountries.com/v3.1/name/${name}`;
    const  FILTER = '?fields=name,capital,population,flags,languages';
    // const { name } = refs.formSearch.elements;

  return fetch(`${SEARCH_URL}${FILTER}`)
        .then(response => {
            return response.json();
        })
        };

   
 
function renderCard(name) {
//  console.log(name);
 const markup = cards(name[0]);
 // console.log(markup);
 refs.countryInfo.innerHTML = markup;

}


refs.formSearch.addEventListener('input', onSearch)

function onSearch(e) {
    e.preventDefault()
    const form = e.currentTarget;
    console.log(form)
    const serchQuuery = refs.formSearch.value;
    console.log(serchQuuery);
   
    httpInquiry(serchQuuery)
        .then(renderCard)
        .catch(error => {
            Notify.failure('Oops, there is no country with that name');
            return error;
        });
}
    // .finally(()=> form.reset())













// function renderList(svg) {
//     const items = []
//     refs.counnryList.innerHTML = '';
//     refs.counnryList.insertAdjacentHTML("beforebegin", items.join(''));
// }


