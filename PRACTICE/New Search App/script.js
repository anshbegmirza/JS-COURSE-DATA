'use strict';
/*
const apiKey = `8ec18138ce7545d2b897c47232807026`;

const blogContainer = document.getElementById('blog-container');

const pageSize = 20;

const searchField = document.getElementById('search-input');

const searchBtn = document.getElementById('search-button');



// to show some cards

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);
    console.log(data.articles);

    return data.articles;

  }
  catch (error) {
    console.error(`Error fetching random news !!! `, error)
    return [];
  }
};



// display blogs
const displayBlogs = function (articles) {
  blogContainer.innerHTML = '';
  articles.forEach((article) => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');
    const img = document.createElement('img')
    // url to image is api property
    img.src = article.urlToImage
    img.alt = article.title;
    const title = document.createElement('h2');

    const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;

    title.textContent = truncatedTitle

    // title.textContent = article.title;

    const description = document.createElement('p');

    const truncatedDesp = article.description.length > 100 ? article.description.slice(0, 120) + "..." : article.description;

    description.textContent = truncatedDesp;

    // description.textContent = article.description;

    // console.log(blogCard);

    blogCard.appendChild(img)
    blogCard.appendChild(title)
    blogCard.appendChild(description)

    blogCard.addEventListener('click', () => {
      window.open(article.url, "_blank")
    })

    blogContainer.appendChild(blogCard);
  })
};


searchBtn.addEventListener('click', async function () {
  const query = searchField.value.trim();

  // if(query !== "")
  if (!query) {
    try {
      const articles = await fetchNewsQuery(query)
      displayBlogs(articles);
    }
    catch (error) {
      console.error(`Error fetching data for ${query}`, error)
    }
  }


})


const fetchNewsQuery = async function (query) {
  try {
    const apiUrl = `
https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    console.log(data.articles);

    return data.articles;

  }
  catch (error) {
    console.error(`Error fetching random news !!! `, error)
    return [];
  }
}


const init = async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  }
  catch (error) {
    console.error(`Error fetching random news !!! `, error)
    // return [];
  }
};

init();
*/

'use strict';

const apiKey = `8ec18138ce7545d2b897c47232807026`;

const blogContainer = document.getElementById('blog-container');
const pageSize = 100;
const searchField = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const spinner = document.getElementById('spinner')

const renderSpinner = function () {
  spinner.classList.remove('hidden')
}

function hideSpinner() {
  spinner.classList.add('hidden')
}

// Fetch random news
async function fetchRandomNews() {
  try {
    renderSpinner()
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    hideSpinner()
    return data.articles || []; // Fallback to an empty array if `articles` is null
  } catch (error) {
    console.error(`Error fetching random news !!! `, error);
    return [];
  }
}

// Display blogs
const displayBlogs = function (articles) {
  blogContainer.innerHTML = '';
  articles.forEach((article) => {
    // Ensure properties exist before accessing them
    const imageUrl = article.urlToImage || 'https://placehold.co/600x400'; // Fallback image
    const titleText = article.title || 'No Title Available';
    const descriptionText = article.description || 'No Description Available';

    const blogCard = document.createElement('div');
    blogCard.classList.add('blog-card');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = titleText;

    const title = document.createElement('h2');
    const truncatedTitle = titleText.length > 30 ? titleText.slice(0, 30) + "..." : titleText;
    title.textContent = truncatedTitle;

    const description = document.createElement('p');
    const truncatedDesp = descriptionText.length > 100 ? descriptionText.slice(0, 120) + "..." : descriptionText;
    description.textContent = truncatedDesp;

    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(description);

    blogCard.addEventListener('click', () => {
      window.open(article.url, "_blank");
    });

    blogContainer.appendChild(blogCard);
  });
};

// Fetch news based on query
const fetchNewsQuery = async function (query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles || []; // Fallback to an empty array if `articles` is null
  } catch (error) {
    console.error(`Error fetching data for ${query}`, error);
    return [];
  }
};

// Search button click handler
searchBtn.addEventListener('click', async function () {
  const query = searchField.value.trim();
  if (!query) {
    console.warn("Search query is empty!");
    return;
  }

  try {
    renderSpinner();

    const articles = await fetchNewsQuery(query);
    hideSpinner()

    displayBlogs(articles);
  } catch (error) {
    console.error(`Error fetching data for ${query}`, error);
  }
});

// Initialize
const init = async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.error(`Error fetching random news !!! `, error);
  }
};

init();
