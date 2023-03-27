String.prototype.capitalize = function () {
	const splittedString = this.split(' ');
	const newString = [];

	splittedString.forEach(word => {
		newString.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
	});

	return newString.join(' ');
};

// String.prototype.reverse = function () {
// 	return this.split('').reverse().join('');
// };

export default String.prototype;
