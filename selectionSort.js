'use strict';

function selectionSort(arr) {
	
	for (let i = 0; i < arr.length-1; i++) {
		
		let min = i;				
		for (let j = i+1; j < arr.length; j++) {			
			if (arr[j] < arr[min]) {
				min = j;
			}
		}		

		swap(arr, i, min);
	}


	return arr;
}


function swap(arr, i1, i2) {
	let temp = arr[i1];
	arr[i1] = arr[i2];
	arr[i2] = temp;

	return;
}

let arr1 = [2,6,4,7,3,9,1,5];
console.log(selectionSort(arr1));