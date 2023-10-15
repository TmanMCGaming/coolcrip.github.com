let searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = () =>
{
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>
{
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
}


window.onscroll = () =>
{
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}

function changeBg(){
	var header = document.getElementById('header');
	var scrollValue = window.scrollY;
	if(scrollValue < 150){
		header.classList.remove('bgcolor');
	} else{
		header.classList.add('bgcolor');
	}
}

window.addEventListener('scroll', changeBg);