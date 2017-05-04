export default (text = 'Hello World I am here! Are you?') => {
	const element = document.createElement('div');

	element.innerHTML = text;

	return element;
};