/* ******************** SHOW MENU ********************** */

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})
}


/* ******************** REMOVE MENU MOBILE ********************** */


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ******************** ADD blur TO HEADER ********************** */

const blurHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header') 
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/* ******************** SHOW blur UP ********************** */

const scrollUp =() =>{
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is heigher than 350 viewport height, and add the show-scroll class to
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                     : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* ******************** Scroll SECTION ACTIVE LINK ********************** */

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/* ******************** blur REVAL ANUMATION ********************** */