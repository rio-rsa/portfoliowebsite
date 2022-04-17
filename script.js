
let greetings = ['Hi,','Halo,', 'G’day,', 'Ciao,'];
let currentIndex = 0;
let h3 = document.querySelector('.about > h3');
setInterval(() => {
   
   h3.innerHTML= greetings[currentIndex];   
   
   currentIndex++;
   
   if (currentIndex === 4)
    currentIndex = 0;

}, 1000)


function cardMouseOver(card) {
	card.style.backgroundColor = "rgb(40,56,69)";
	card.querySelector('a').style.backgroundColor = "rgb(40,56,69)";
	let lists = card.querySelectorAll('ul > li');
	for(let i = 0; i < lists.length; i++){
		lists[i].style.backgroundColor = '#202C39';
	}
}

function cardMouseOut(card) {
	card.style.backgroundColor = "#202C39";
	card.querySelector('a').style.backgroundColor  = "#202C39";
	let lists = card.querySelectorAll('ul > li');
	for(let i = 0; i < lists.length; i++){
		lists[i].style.backgroundColor = '#283845';
	}
}

scrolldown = document.querySelector('.fa-chevron-circle-down');
scrolls = document.querySelectorAll('nav > ul > li');
projects = document.querySelector('.projects');
contact = document.querySelector('.contact');

scrolldown.addEventListener("click", navigateProjects, false)
scrolls[0].addEventListener("click", navigateProjects, false);
scrolls[1].addEventListener("click", navigateContacts, false);

function navigateProjects(e) {
	projects.scrollIntoView({behavior: 'smooth'});
}

function navigateContacts(e) {
	contact.scrollIntoView({behavior:'smooth'});
}

