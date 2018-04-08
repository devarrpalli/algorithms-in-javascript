'use strict';


function insertionSort(arr) {
	let length = arr.length;

	for (let i = 1; i < length; i++) {
		let value = arr[i];
		let hole = i;

		while (hole > 0 && arr[hole-1] > value) {
			arr[hole] = arr[hole-1];
			hole = hole-1;
		}

		arr[hole] = value;
	}

	return arr;
}


let arr1 = [7,2,4,1,5,3];
console.log(insertionSort(arr1));