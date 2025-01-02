import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js'
// import { getJSON, sendJSON } from './helper.js';
import { AJAX } from './helper.js';
// import { create } from 'core-js/core/object';
import 'core-js/es/object/create';



// all the data abt the application
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};


const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
}

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id} `);
    console.log(id);

    state.recipe = createRecipeObject(data);


    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmark = true;
    } else {
      state.recipe.bookmark = false;
    }

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

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`)
    // console.log(data);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key })
      }
    });
    state.search.page = 1;
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
  // console.log(start, end);

  return state.search.results.slice(start, end);
}


export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity * newServings / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings
    // 2 * 8/4 = 4
  });

  state.recipe.servings = newServings;

};


const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
}



export const addBookmark = function (recipe) {
  // add bookmark 
  state.bookmarks.push(recipe);

  // mark current recipe as bookmark
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  };
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  //delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // mark current recipe as NOT bookmarked
  if (id === state.recipe.id) {
    state.recipe.bookmarked = false;
  };
  persistBookmarks();

}

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
}
init();
console.log(state.bookmarks);


const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks(); // to clear all bookmarks on reload.


export const uploadRecipe = async function (newRecipe) {
  try {
    console.log(Object.entries(newRecipe));

    const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== "").map(ing => {

      const ingArr = ing[1].replaceAll(" ", "").split(',');
      if (ingArr.length !== 3) throw new Error('Wrong ingredient format. Please use correct formate :)')
      const [quantity, unit, description] = ingArr
      return { quantity: quantity ? +quantity : null, unit, description };
    })

    console.log(ingredients);

    // transforming the created ingredients content into the recipe formate we specified beforehand in the beginning.

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    console.log(recipe);

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe)
    // console.log(data);
    state.recipe = createRecipeObject(data);
    // console.log(state.recipe);
    addBookmark(state.recipe)
    // uploading it to the api.



  }
  catch (err) {
    throw err;
  }




}