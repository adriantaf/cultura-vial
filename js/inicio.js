'use strict';

// btn-abrir-aside
// btn-cerrar-aside
// aside
const slider = document.querySelector('#slider');
const btnCerrarSlider = document.querySelector('#btn-cerrar-slider');
const chbRecordarSlider = document.querySelector('#chb-recordar-slider');
const aside = document.querySelector('#aside');
const btnAbrirAside = document.querySelector('#btn-abrir-aside');
const btnCerrarAside = document.querySelector('#btn-cerrar-aside');

class Aside {
	constructor() {
		this.state = false;
	}

	get isActive() {
		return this.state;
	}

	cerrar() {
		btnAbrirAside.classList.add('active');
		aside.classList.remove('active');
		this.state = false;
	}

	abrir() {
		btnAbrirAside.classList.remove('active');
		aside.classList.add('active');
		this.state = true;
	}
}

const SIDEBAR = new Aside();

btnAbrirAside.addEventListener('click', () => SIDEBAR.abrir());
btnCerrarAside.addEventListener('click', () => SIDEBAR.cerrar());
document.addEventListener('click', (e) => {
	if (SIDEBAR.isActive) {
		if (e.target.parentElement.tagName === 'NAV') {
			SIDEBAR.cerrar();
		}
	}
});
aside.addEventListener('click', (e) => {
	if (e.target.tagName === 'A') {
		SIDEBAR.cerrar();
	}
});
pageInicio.addEventListener('scroll', () => {
	if (!SIDEBAR.isActive) {
		btnAbrirAside.classList.add('scroll');
	}
});
pageInicio.addEventListener('scrollend', () => {
	if (!SIDEBAR.isActive) {
		btnAbrirAside.classList.remove('scroll');
	}
});

chbRecordarSlider.addEventListener('change', () => {
	if (chbRecordarSlider.checked) {
		localStorage.setItem('recordar', '');
	} else {
		if (localStorage.getItem('recordar')) {
			localStorage.removeItem('recordar');
		}
	}
});

btnCerrarSlider.addEventListener('click', () => {
	slider.classList.remove('active');
});