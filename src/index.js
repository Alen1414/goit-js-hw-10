import './css/styles.css';
// import Notiflix from 'notiflix';
import cards from './cards.hbs';
const DEBOUNCE_DELAY = 300;
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce'

import API from './api-service'
const refs = {
    formSearch: document.querySelector('#search-box'),
    counnryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};
// console.log(refs.formSearch);
// console.log(refs.counnryList);
// console.log(refs.countryInfo);



refs.formSearch.addEventListener('input',debounce(onSearch, DEBOUNCE_DELAY))

function onSearch(e) {
    e.preventDefault()
    const form = e.currentTarget;
    console.log(form)
const serchQuuery = refs.formSearch.value;
console.log(serchQuuery);
   
   API.httpInquiry(serchQuuery)
        .then(renderCard)
        .catch(onFetchError)
    // .finally(()=> form.reset())
};

function renderCard(name) {
 console.log(name);
 const markup = cards(name[0]);
 // console.log(markup);
 refs.countryInfo.innerHTML = markup;

}
function onFetchError(error) {
    Notify.failure('Oops, there is no country with that name');
}









// function renderList(svg) {
//     const items = []
//     refs.counnryList.innerHTML = '';
//     refs.counnryList.insertAdjacentHTML("beforebegin", items.join(''));
// }


