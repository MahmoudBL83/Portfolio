/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 *
*/
//the navbar container
let navList =document.querySelector('#navbar__list');
//the sections of the page
let sections=[... document.querySelectorAll('section')];
/*
 * End Global Variables
 * Start Helper Functions
 *
*/

/*All functions implemented in event listening*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the navbar
//for loop to make nav bar
//start of the loop
for(let i=1;i<=(sections.length);i++){
	let x = document.createElement('li');
	x.textContent=`Section ${i}`;
	//append li elements to the ul list
	navList.appendChild(x);
	//add the style to the list elements
	//give an id to each of the nav components
	x.setAttribute('id','secLink'+i)
	//giva an attribute to the lists elements
	x.classList.add('menu__link')
}
//end of the loop

//store the li elements in a variable.
let lists=[...document.querySelectorAll('li')];

// Add class 'your-active-class' to section when near top of viewport
//And refresh the navbar li classes
window.addEventListener('scroll', function activeClass() {
	//loop over the 4 sections.
	sections.forEach(function(x, i) {
		let top = x.getBoundingClientRect().top;
		if (top >= -20 && top <= 500) {
			//add the active class to section
			x.classList.add('your-active-class');
			//refresh li classes
			lists[i].classList.add('activeNav');
			lists[i].classList.remove('menu__link');
		} else {
			//remove active class from the section
			x.classList.remove('your-active-class');
			//refresh li classes
			lists[i].classList.remove('activeNav');
			lists[i].classList.add('menu__link');
		}
	});
})

// Scroll to anchor ID using scrollTO event
lists.forEach(function(element, index) {
	element.addEventListener('click', function() {
		sections[index].scrollIntoView({
			behavior: "smooth"
		});
	})
});
// Build menu
/*built in css with :hover and @media;*/
