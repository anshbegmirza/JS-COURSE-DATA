// Selecting DOM elements
const getJokeBtn = document.getElementById('getJoke');
const answerBtn = document.getElementById('answerBtn');
const showSetup = document.getElementById('showSetup');
const showDelivery = document.getElementById('showDelivery');

// API URL
const apiUrl = 'https://v2.jokeapi.dev/joke/Programming';

// Function to fetch a joke from the API
async function fetchJoke(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Display the joke based on the type
    if (data.type === 'single') {
      showSetup.textContent = `Joke: ${data.joke}`;
      showDelivery.textContent = ''; // Clear delivery for single jokes
    } else {
      showSetup.textContent = `Setup: ${data.setup}`;
      showDelivery.textContent = ''; // Clear previous delivery
      // Enable the "Show Answer" button for delivery jokes
      answerBtn.disabled = false;
      answerBtn.addEventListener('click', () => {
        showDelivery.textContent = `Delivery: ${data.delivery}`;
        answerBtn.disabled = true; // Disable button after showing the answer
      });
    }
  } catch (error) {
    console.error('Error fetching the joke:', error);
    showSetup.textContent = 'Error fetching the joke. Please try again.';
    showDelivery.textContent = '';
  }
}

// Store the results for potential reuse (if needed later)
const storeResults = {
  setup: '',
  delivery: '',
};

// Add event listener for fetching a new joke
getJokeBtn.addEventListener('click', () => {
  fetchJoke(apiUrl);
  // Reset UI elements
  showSetup.textContent = 'Loading joke...';
  showDelivery.textContent = '';
  answerBtn.disabled = true;
});


