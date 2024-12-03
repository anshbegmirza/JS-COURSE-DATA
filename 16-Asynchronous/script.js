'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });

}

getCountryData('usa')
getCountryData('portugal')
getCountryData('india')
getCountryData('germany')
*/


const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages).join(', ')}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

/*
const getCountryAndNeighbour = function (country) {

  // ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    //render country 1
    renderCountry(data);

    // get neighbour country
    const [neighbour] = data.borders;


    if (!neighbour) return; // for islands

    // ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      // console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');

    })

  });

}

getCountryAndNeighbour('usa')
// getCountryAndNeighbour('portugal')
*/


// classlic call back hell
// a triangular shape like this, aslo indicates callbackHell.
/*
setTimeout(() => {
  console.log(`1 second passed`);
  setTimeout(() => {
    console.log(`2 second passed`);
    setTimeout(() => {
      console.log(`3 second passed`);
      setTimeout(() => {
        console.log(`4 second passed`);
        setTimeout(() => {
          console.log(`5 second passed`);
          setTimeout(() => {
            console.log(`6 second passed`);
            setTimeout(() => {
              console.log(`7 second passed`);
              setTimeout(() => {
                console.log(`8 second passed`);
                setTimeout(() => {
                  console.log(`9 second passed`);
                  setTimeout(() => {
                    console.log(`10 second passed`);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/


/*
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);
*/
// using promises to get the country data instead of using a callback

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return; // for country with no neighbours, islands

      // country
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
    .then(response => {
      response.json()
      console.log(response);

    })
    .then(data => renderCountry(data, 'neighbour'));


};

// getCountryData('portugal')
getCountryData('germany')