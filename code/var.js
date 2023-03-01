export const dayEN = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
export const dayUK = [
	'Неділя',
	'Понеділок',
	'Вівторок',
	'Середа',
	'Четвер',
	'П’ятниця',
	'Субота',
];
export const getLogin = `${
	dayEN[new Date().getDay()]
}${new Date().getHours()}`.toLowerCase();
export const getPassword = `${
	dayUK[new Date().getDay()]
}${new Date().getHours()}${new Date().getMinutes()}${new Date().getFullYear()}`.toLowerCase();
