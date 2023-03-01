// Додати нові продукти (Відео для відео хостингу та страви для ресторану)
// Відео має бути 3 зовнішнім посиланням та 3 відео завантажені до проекту

// Тут реалізація вашого коду.
import { generationId, dateNow } from './functions.js';

class VideoElementCRM {
	constructor(
		productName = '',
		poster = '/img/error.png',
		url = '',
		productDescription = '',
		productQuantity = 0,
		keywords = [],
		dateNow = () => {},
		id = () => {}
	) {
		this.id = id();
		this.date = dateNow();
		this.productName = productName;
		this.poster = poster;
		this.url = url;
		this.productDescription = productDescription;
		this.productQuantity = productQuantity;
		this.keywords = keywords.split(',');
		this.status = false;
	}
}

class RestElementCRM {
	constructor(
		productName = '',
		productWeiht = 0,
		ingredients = '',
		productDescription = '',
		productQuantity = 0,
		keywords = [],
		price = 0,
		productimageUrl = '/img/error.png',
		dateNow = () => {},
		id = () => {}
	) {
		this.id = id();
		this.date = dateNow();
		this.productName = productName;
		this.productWeiht = productWeiht;
		this.ingredients = ingredients;
		this.productDescription = productDescription;
		this.productQuantity = productQuantity;
		this.keywords = keywords.split(',');
		this.status = false;
		this.price = price;
		this.productimageUrl = productimageUrl;
	}
}

function saveDataVideo() {
	try {
		const [isCategory] = document.querySelector('select').selectedOptions;

		const [...inputs] = document.querySelectorAll('form input');
		if (isCategory.value === 'Відео хостинг') {
			const obj = {
				productName: 'string',
				poster: 'string',
				url: 'string',
				description: 'string',
				keywords: 'string array',
			};

			inputs.forEach((e) => {
				obj[e.dataset.type] = e.value;
				e.value = '';
			});

			const video = JSON.parse(localStorage.video);
			video.push(
				new VideoElementCRM(
					obj.productName,
					obj.poster,
					obj.url,
					obj.description,
					undefined,
					obj.keywords,
					dateNow,
					generationId
				)
			);

			localStorage.video = JSON.stringify(video);
		}
	} catch (e) {
		console.error(e);
	}
}

function saveDataDish() {
	try {
		const [isCategory] = document.querySelector('select').selectedOptions;
		const [...inputs] = document.querySelectorAll('form input');
		if (isCategory.value === 'Рестаран') {
			const obj = {
				productName: 'string',
				productWeiht: 'number',
				ingredients: 'string',
				description: 'string',
				keywords: 'string array',
				price: 'number',
				productimageUrl: 'string',
				description: 'string',
			};

			inputs.forEach((e) => {
				obj[e.dataset.type] = e.value;
				e.value = '';
			});

			const rest = JSON.parse(localStorage.rest);
			rest.push(
				new RestElementCRM(
					obj.productName,
					obj.productWeiht,
					obj.ingredients,
					obj.description,
					undefined,
					obj.keywords,
					obj.price,
					obj.productimageUrl,
					dateNow,
					generationId
				)
			);

			localStorage.rest = JSON.stringify(rest);
		}
	} catch (e) {
		console.error();
	}
}

export { saveDataVideo, saveDataDish };
