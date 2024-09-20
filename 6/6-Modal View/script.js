'use strict';
/* -------------------------- */
// Use video no 80 to add and remove classses.

// first select all the variables that you need and store them.
/* -------------------------- */
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const btnCloseModal = document.querySelector('.close-modal');


//function to close the modal.
const closeModal = function () {
  //adds the hidden class to modal class.
  modal.classList.add('hidden');
  //adds the hidden class to the overlay class.
  overlay.classList.add('hidden');
}

//function to open the modal.
const openModal = function () {
  console.log('Button clicked');
  //removes the hidden class from the modal class.
  modal.classList.remove('hidden', 'other_class_name');
  //removes the hidden class from the modal class.
  overlay.classList.remove('hidden');
}


// console.log(btnsOpenModal);
// console.log(typeof btnsOpenModal); // object so we can find its length using the .length.



//selects all the btns
for (let i = 0; i < btnsOpenModal.length; i++) {
  //on click the btn opens the modal 
  btnsOpenModal[i].addEventListener('click', openModal);

  //closes the modal.
  btnCloseModal.addEventListener('click', closeModal);

  //overlay in background on click.
  overlay.addEventListener('click', closeModal
  );
}


/* -------------------------- */
// document.addEventListener('keydown', closeModal);


//closes the modal window when escape key pressed.
document.addEventListener('keydown', function (event) {

  //Logs which key pressed 
  console.log(event.key);

  /*
  //checks if key is escape
  if (event.key === 'Escape') {
    //checks if if modal class does not exist, then closemodal function called.
    if (!modal.classList.contains('.hidden')) {
      closeModal();
    }
  }
  */
  if (event.key === 'Escape' && !modal.classList.contains('.hidden')) {
    closeModal();
  }
});