

function httpInquiry(name) {

const SEARCH_URL = `https://restcountries.com/v3.1/name/${name}`;
const  FILTER = '?fields=name,capital,population,flags,languages';
    return fetch(`${SEARCH_URL}${FILTER}`).then(response => {
        if (!response.ok) {
      throw new Error(response.status);
    }
            return response.json();
        })
};
        
export default { httpInquiry };