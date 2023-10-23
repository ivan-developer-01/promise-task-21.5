let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let number = generateRandomNumber(1, 100);

		if (number % 2 === 0) {
			resolve(number);
		} else {
			reject(number);
		}
	}, 3000);
});

promise
	.then((number) => {
		console.log(`Завершено успешно. Сгенерированное число — ${number}`);
	})
	.catch((number) => {
		console.log(`Завершено с ошибкой. Сгенерированное число — ${number}`);
	});

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
