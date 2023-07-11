const links = document.querySelectorAll('a[href^="#"]');

function softScroll(event){
	event.preventDefault();
	const href = event.currentTarget.getAttribute('href');
	const sessao = document.querySelector(href);
	const topoSessao = sessao.offsetTop - 100;

	window.scrollTo({
		top: topoSessao,
		behavior: "smooth",
	})
}

links.forEach((itens) => {
	itens.addEventListener('click', softScroll)
});