'use strict';

const btnInicio = document.querySelector('#btn-inicio');
const pageInicio = document.querySelector('#page-inicio');

const btnExamen = document.querySelector('#btn-examen');
const pageExamen = document.querySelector('#page-examen');

const btnGuia = document.querySelector('#btn-guia');
const pageGuia = document.querySelector('#page-guia');


const NAV_OPTIONS = {
	inicio: 'inicio',
	examen: 'examen',
	guia: 'guia'
}


function activeElement(arrElements, selection) {
	for (let i = 0; i < arrElements.length; i++) {
		if (i === selection) {
			arrElements[i].classList.add('active');
		} else {
			arrElements[i].classList.remove('active');
		}
	}
}

function tabNavigation(sectionName) {
	switch (sectionName) {
		case NAV_OPTIONS.inicio:
			pageInicio.classList.add('active');
			pageExamen.classList.remove('active');
			pageGuia.classList.remove('active');

			btnInicio.classList.add('active');
			btnExamen.classList.remove('active');
			btnGuia.classList.remove('active');
			break;

		case NAV_OPTIONS.examen:
			pageInicio.classList.remove('active');
			pageExamen.classList.add('active');
			pageGuia.classList.remove('active');

			btnInicio.classList.remove('active');
			btnExamen.classList.add('active');
			btnGuia.classList.remove('active');
			slider.classList.remove('active');
			break;

		case NAV_OPTIONS.guia:
			pageInicio.classList.remove('active');
			pageExamen.classList.remove('active');
			pageGuia.classList.add('active');

			btnInicio.classList.remove('active');
			btnExamen.classList.remove('active');
			btnGuia.classList.add('active');
			slider.classList.remove('active');
			break;
	}
}

tabNavigation(NAV_OPTIONS.inicio);

btnInicio.addEventListener('click', () => tabNavigation(NAV_OPTIONS.inicio));
btnExamen.addEventListener('click', () => tabNavigation(NAV_OPTIONS.examen));
btnGuia.addEventListener('click', () => tabNavigation(NAV_OPTIONS.guia));