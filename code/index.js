import { getLogin, getPassword } from './var.js';
import {
	changeInputEvent,
	userLoginEvent,
	showModalEvent,
	hideModalEvent,
	saveData,
} from './events.js';
import { createHTMLElement, categorySelect } from './functions.js';
import { saveDataDish, saveDataVideo } from './code.js';

if (
	!sessionStorage.isLogin &&
	!document.location.pathname.includes('/authorization')
) {
	document.location = '../authorization/';
}
//authorization
try {
	document
		.querySelector('.window form')
		.addEventListener('change', changeInputEvent);

	document.getElementById('disabled').addEventListener('click', userLoginEvent);
} catch (error) {
	// console.error(error)
}

//main page
try {
	document.querySelector('.add').addEventListener('click', showModalEvent);

	const modalWindow = document.querySelector('.container-modal .modal');

	const modalSave = createHTMLElement('button', 'btn-save', 'Зберегти', [
		{ type: 'button' },
		{ 'data-type': 'button' },
	]);
	const modalClose = createHTMLElement('button', 'btn-close', 'Скасувати', [
		{ type: 'button' },
		{ 'data-type': 'button' },
	]);

	modalWindow.insertAdjacentHTML(
		'beforeend',
		`
    <h2>Додайте новий продукт до БД</h2>
    <div class="catigoty"></div>
    <div class="modal__body"></div>
    <div class="modal__control"></div>
    `
	);

	document.querySelector('.modal__control').append(modalSave, modalClose);
	categorySelect();

	modalClose.addEventListener('click', hideModalEvent);

	modalSave.addEventListener('click', saveData);

	/*
    Ваші події 
    */
	modalSave.addEventListener('click', saveDataVideo);

	modalSave.addEventListener('click', saveDataDish);
} catch (e) {
	console.error();
}

console.log(getLogin, getPassword);

if (!localStorage.store) {
	localStorage.store = JSON.stringify([]);
}
if (!localStorage.video) {
	localStorage.video = JSON.stringify([]);
}
if (!localStorage.rest) {
	localStorage.rest = JSON.stringify([]);
}

if (document.querySelector('.container-modal')) {
	const backDrop = document.querySelector('.container-modal');
	backDrop.addEventListener('click', onBackDropClick);
	function onBackDropClick() {
		if (event.currentTarget === event.target) {
			hideModalEvent();
		}
	}
}
