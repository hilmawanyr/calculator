let bucket = [];
const counterColumn = document.getElementById('input-column');

document.querySelectorAll('.btn-calculator').forEach(btn => {
	btn.addEventListener('click', function () {
		const validInput = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*'];
		const val = this.getAttribute('data-value');
		
		if (validInput.includes(val)) {
			bucket.push(val);
			counterColumn.value = bucket.join('');
		}

		if (val === 'C') {
			bucket = [];
			counterColumn.value = '';
		}

		if (val === '=') {
			if (bucket.length !== 0) {
				count();
			}
		}
	})
});

function count () {
	let total = 0;
	const amount = bucket.join();
	const numbers = amount.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];

	while (numbers.length) {
		total += parseFloat(numbers.shift());
	}
	counterColumn.value = total;
}

