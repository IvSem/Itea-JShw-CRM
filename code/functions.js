import { changeCategoryEvent } from './events.js';

export const validate = (p, v) => p.test(v);
export const generationId = () => {
	const sizeID = Math.floor(Math.random() * (10 - 18) + 18);
	const a = 'qwertyuiopasdfghjklzxcvbnm1234567890$&';
	let r = '';

	for (let i = 0; i < sizeID; i++) {
		r += a[Math.floor(Math.random() * a.length)];
	}

	return r;
};

export function dateNow() {
	return `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}

export function categorySelect() {
	const catigoty = document.querySelector('.catigoty');

	catigoty.insertAdjacentHTML(
		'beforeend',
		`<select id="category">
    <option value="" disabled selected>Оберіть категорію</option>
    <option value="Магазин">Магазин</option>
    <option value="Відео хостинг">Відео хостинг</option>
    <option value="Рестаран">Рестаран</option>
</select>`
	);

	document
		.querySelector('#category')
		.addEventListener('change', changeCategoryEvent);
}

export function createHTMLElement(
	tagName = 'div',
	className,
	value,
	attr = []
) {
	const el = document.createElement(tagName);
	if (className) {
		el.classList.add(className);
	}
	if ('inputtextareaoption'.includes(tagName)) {
		el.value = value;
	} else {
		el.innerText = value;
	}
	attr.forEach((attr) => {
		// Зробити, щоб ми отримували точно сам об.
		if (typeof attr === 'object' && attr !== null) {
			// отримати Значання з об...
			//el.setAttribute(attr.props, attr.value)
			el.setAttribute(Object.entries(attr)[0][0], Object.entries(attr)[0][1]);
		}
	});
	return el;
}

export function createInputSring(type = 'text', value = '', id, key) {
	const input = `
    <div class="element-product">
      <label for="${id}">${value}</label>
      <input type="${type}" id="${id}" data-type="${key}">
    </div>
    `;
	return input;
}
