function countZeroes(arr) {
	arr = arr.sort();

	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while (rightIdx != 0) {
		let rightVal = arr[rightIdx];
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		let middleVal = arr[middleIdx];

		if (middleVal > 0) {
			rightIdx = middleIdx - 1;
		} else if (middleVal == 0 && rightVal == 1) {
			rightIdx = middleIdx + 1;
		} else if (middleVal == 0 && rightVal == 0 && arr[rightIdx + 1] == 0) {
			rightIdx += 1;
			middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		} else {
			return rightIdx + 1;
		}
	}
	return 0;
}

module.exports = countZeroes;
