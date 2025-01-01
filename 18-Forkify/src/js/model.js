import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config.js'
import { getJSON } from './helper.js';

// all the data abt the application
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },

};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id} `);
    console.log(id);


    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    // console.log(state.recipe);
  }
  catch (err) {
    console.error(`${err} !!!`);
    throw err;
  }
};


export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`)
    // console.log(data);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      }
    });

    // console.log(state.search.results);

  }
  catch (err) {
    console.error(`${err} !!!`);
    throw err;
  }
};

// loadSearchResults('pizza')

export const getSearchResultsPage = function (page = state.search.page) {

  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; //0; // suppose page =2 thereby start from 10
  const end = (page) * state.search.resultsPerPage; //9; // end on 20 (2*10)
  console.log(start, end);

  return state.search.results.slice(start, end);
}


export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity * newServings / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings
    // 2 * 8/4 = 4
  });

  state.recipe.servings = newServings;

}