'use strict';


function bubbleSort(arr) {
	let length = arr.length;

	for (let i = 0; i < length-1; i++) {

		let flag = 0
		for (let j = 0; j < length -i -1; j++) {
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
				flag = 1;
			}
		}

		if (flag === 0) {
			break;
		}
	}

	return arr;
}


function swap(arr, i1, i2) {
	let temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;	
}

let arr1 = [2,7,4,3,5,1];
console.log(bubbleSort(arr1));