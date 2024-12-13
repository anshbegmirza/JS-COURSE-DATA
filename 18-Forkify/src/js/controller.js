import * as model from './model.js';
import 'core-js/stable'; // pollyfill for the rest.
import 'regenerator-runtime/runtime'; // pollyfill async await
import View from './views/view.js'
import resultsView from './views/resultsView.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
// console.log(icons);

if (module.hot) {
  module.hot.accept();
}


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

    // resultsView.renderSpinner()

    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1). loading a recipe from the api
    await model.loadRecipe(id);
    // const recipe = model.state.recipe;

    // 2). Rendering recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);
  }
  catch (err) {
    // alert(err);
    // console.error(err);
    recipeView.renderError();
  }
}

const controlSearchResults = async function () {
  try {

    resultsView.renderSpinner()

    //1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2. load search
    await model.loadSearchResults(query);
    // console.log(model.state.search.results);

    // //3. clear input
    // searchView.clearInput()
    resultsView.render(model.state.search.results);
  }
  catch (err) {
    console.log(err);
  }
}
controlSearchResults()

// handler subscriber pattern

const init = function () {
  recipeView.addHandleRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();