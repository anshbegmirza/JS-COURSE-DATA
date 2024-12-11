import * as model from './model.js';
import recipeView from './views/recipeView.js';


import 'core-js/stable'; // pollyfill for the rest.
import 'regenerator-runtime/runtime'; // pollyfill async await
import recipeView from './views/recipeView.js';
// console.log(icons);


const { mark } = require("regenerator-runtime");

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// this api is developed by Jonas himself

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



///////////////////////////////////////

const controlRecipe = async function () {
  try {

    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1). loading a recipe from the api
    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    // 2). Rendering recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);
  }
  catch (err) {
    alert(err);
  }
}

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
const changeAndLoad = ['hashchange', 'load'];
changeAndLoad.forEach(ev => window.addEventListener(ev, controlRecipe));