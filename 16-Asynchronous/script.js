'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
btn.style.display = 'none';
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


const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

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


// classic call back hell
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


// Consuming promises
// chaining promises

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    }, err => alert(err))
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

    }, err => alert(err))
    .then(data => renderCountry(data, 'neighbour'));
};

getCountryData('germany')


btn.addEventListener('click', function () {
  getCountryData('india')
});
*/

// 250: Coding Challenge #1
/*
// the api provided by jonas was not working so used a free and open source api 

console.log(`Coding Challenge #1`);

const whereAmI = function (lat, lng) {
  fetch(`https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&zoom=18&format=jsonv2`)
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`)
      return response.json()
    },)
    .then(data => {
      let city = data.address.city;
      let country = data.address.country;
      // console.log(data);
      console.log(`You are in ${city}, ${country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(res => {
      console.log(res);

      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data2 => renderCountry(data2[0]))
    .catch(err => { console.error(`${err.message} EMOJI !!!`) });
};
whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(20320, 20.03); // for seeing the error. */
/*
console.log(`252 The Event Loop in Practice`);

console.log(`Test start`);

setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve('Resolved promise 1').then(response => console.log(response));

Promise.resolve(`Resolved promise 2`).then(res => {
  for (let i = 0; i < 1000000000; i++) { }
  console.log(res);
})

console.log(`Test end`);


// to understand this code better use  http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
*/


/*

// Building a simple promise
console.log(`Building a simple promise`);
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve(`You Won 50000$`);
  }
  else {
    reject(`You lost your money `);
  }
});

lotteryPromise.then(res => console.log(res) // if part 
).catch(err => console.log(err) // else part
)
*/
/*
const lotteryPromise = new Promise(function (resolve, reject) {

  console.log(`Lottery draw is happening`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You Won 50000$`);
    }
    else {
      reject(new Error(`You lost your money `));
    }
  }, 3000)

});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying timeout function

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};



// wait(2)
//   .then(() => { console.log(`I waited for 2 seconds`); return wait(1); })
//   .then(() => {
//     console.log(`I waited for 1 second`)
//   });


//replicating call back hell example
wait(1)
  .then(() => { console.log(`I waited for 1 seconds`); return wait(1); })
  .then(() => { console.log(`I waited for 2 seconds`); return wait(1); })
  .then(() => { console.log(`I waited for 3 seconds`); return wait(1); })
  .then(() => { console.log(`I waited for 4 seconds`); return wait(1); })
  .then(() => {
    console.log(`I waited for 5 second`)
  })


Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('problem')).catch(x => console.log(x));

*/

/*
console.log(`254: Promisifying the Geolocation API`);


const getPosition = function () {
  return new Promise(
    function (resolve, reject) {
      // return navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
      navigator.geolocation.getCurrentPosition(resolve, reject)

    }

  )
};

getPosition()
  .then(pos => console.log(pos))



const whereAmI = function () {
  getPosition().then(pos => {
    const { latitude: lat, longitude: lng } = pos.coords;
    return fetch(`https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&zoom=18&format=jsonv2`)
  })
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error(`Problem with geocoding ${response.status}`)
      return response.json()
    },)
    .then(data => {
      let city = data.address.city;
      let country = data.address.country;
      // console.log(data);
      console.log(`You are in ${city}, ${country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(res => {
      console.log(res);

      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data2 => renderCountry(data2[0]))
    .catch(err => { console.error(`${err.message} EMOJI !!!`) });
};
whereAmI(52.508, 13.381);

btn.addEventListener('click', whereAmI);



*/

// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// solution
/*
const imgContainer = document.querySelector('.images')

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  // imgPath = '/img/img-1.jpg';

  return new Promise(
    function (resolve, reject) {
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load', function () {
        imgContainer.append(img);
        resolve(img);
      });

      img.addEventListener('error', function () {
        reject(new Error('Image not found'))
      });

    });
};
let currentImg;
createImage(`img/img-1.jpg`)
  .then(img => {
    currentImg = img;
    console.log(`Image 1 loaded`);
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(`Image 2 loaded`);
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err)
  );
  */

///
/*
console.log(`256: Consuming Promises with Async_Await`);

const getPosition = function () {
  return new Promise(
    function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
};

const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const resGeo = await fetch(`https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&zoom=18&format=jsonv2`)

  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=> console.log(res))
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.address.country}`);
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
}
whereAmI();
console.log(`first`);


// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message)
// }
*/
/*

console.log(`257: Catching error with try and catch block`);


const getPosition = function () {
  return new Promise(
    function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
};


const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&zoom=18&format=jsonv2`)
    if (!resGeo.ok) throw new Error('Problem getting location data ')

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.address.country}`);
    if (!res.ok) throw new Error('Problem getting country ')
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
    renderError(`Something went worng ${err.message}`)

    // reject promise returned from the async function
    throw err;
  }
};

// whereAmI();

console.log(`258: Returning Values from Async Functions`);
console.log(`1: Will get location`);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`));

// this is what a iffy looks like

/*
(function () {
  // function body
})
// calling it   
();
*/

/*
(async function () {
try {
  const city = await whereAmI();
  console.log(`2: ${city}`);

}
catch (err) {
  console.log(`2: ${err.message}`);
}
console.log(`3: Finished getting location`)
})();
*/

/*
console.log(`259: Running Promises in Parallel`);

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    // console.log([data1.capital, data2.capital, data3.capital].flat(2));

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital).flat(1));


  }
  catch (err) {
    console.error(`${err}`)
  }
}
get3Countries(`India`, `Canada`, `USA`);


console.log(`260: Other Promise Combinators_ race, allSettled and any`);

// Promise race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0].name.common);
})()

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'))
    }, sec * 1000)
  })
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(2)
]).then(res => { console.log(res[0]) })
  .catch(err => { console.error(err); })



// Promise.allSettled 
// takes a whole array of promises and returns the array of settled promises.

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.resolve('Success'),
]).then(res => console.log(res)
)


// Promise.any (ES 2021)

Promise.any(
  [Promise.resolve('Success'),
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.resolve('Success')]
).then(res => console.log(res))
  .catch(err => console.error(err))

*/
console.log(`261: Coding Challenge #3`);

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  // imgPath = '/img/img-1.jpg';

  return new Promise(
    function (resolve, reject) {
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load', function () {
        imgContainer.append(img);
        resolve(img);
      });

      img.addEventListener('error', function () {
        reject(new Error('Image not found'))
      });

    });
};

const loadNPause = async function () {
  try {
    // load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Img 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Img 2 loaded');
    await wait(2);
    img.style.display = 'none';
  }
  catch (err) {
    // console.log(err);
    console.error(`${err} occured`);
  }
}

// loadNPause();

// Part 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    // console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
    console.log(imgsEl[0]);

  }
  catch (err) {
    console.error(err);
  }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

'use strict';

function downloadContents(urls) {
  // Create an array of promises that fetch the contents of each URL
  const fetchPromises = urls.map(url =>
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return response.text(); // Get the text content of the response
      })
  );

  // Use Promise.all to wait for all the fetch requests to complete in parallel
  return Promise.all(fetchPromises);
}
