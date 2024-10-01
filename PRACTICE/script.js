// Selecting elements
const paginationNumbers = document.getElementById("pagination-numbers");
const dataList = document.getElementById("Data-to-show");
const dataFields = dataList.querySelectorAll("li");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const paginationLimit = 5; // number of items to show per page
const pageCount = Math.ceil(dataFields.length / paginationLimit); // total number of pages
let currentPage = 1; // current page number

// Function to disable a button
const disableBtn = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
}

// Function to enable a button
const enableBtn = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
}

// Function to update the page status
const pageStatus = () => {
  currentPage === 1 ? disableBtn(prevBtn) : enableBtn(prevBtn);
  currentPage === pageCount ? disableBtn(nextBtn) : enableBtn(nextBtn);
}

// Function to display data based on current page
const displayData = () => {
  const start = (currentPage - 1) * paginationLimit; // starting index
  const end = start + paginationLimit; // ending index

  // Hide all items and show only the items for the current page
  dataFields.forEach((item, index) => {
    item.classList.toggle('hidden', index < start || index >= end);
  });
  updatePaginationNumbers(); // update pagination numbers display
}

// Function to update pagination numbers display
const updatePaginationNumbers = () => {
  paginationNumbers.innerHTML = `${currentPage} / ${pageCount}`; // display current page and total pages
}

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayData();
    pageStatus();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < pageCount) {
    currentPage++;
    displayData();
    pageStatus();
  }
});

// Initial setup
displayData();
pageStatus();