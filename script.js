let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let number = generateRandomNumber(1, 100);

		if (number % 2 === 0) {
			resolve(number);
		} else {
			reject(number);
		}
	}, 1000);
});

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
