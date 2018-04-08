'use strict';

function merge(left, right, A) {
	let nL = left.length;
	let nR = right.length;

	let i=0, j=0, k=0;

	while(i < nL && j < nR) {
		if (left[i] <= right[j]) {
			A[k] = left[i];
			i++;
		} else {
			A[k] = right[j];
			j++;
		}
		k++;
	}

	while (i < nL) {
		A[k] = left[i];
		i++; 
		k++;
	}

	while (j < nR) {
		A[k] = right[j];
		j++;
		k++;
	}
}


function mergeSort(A) {
	let length = A.length;

	if (length < 2) {
		return;
	}

	let mid = length/2;
	let left=[]; 
	let right=[];

	for (let i = 0; i < mid; i++) {
		left[i] = A[i];
	}

	for (let i = mid; i < length; i++) {
		right[i-mid] = A[i];
	}

	mergeSort(left);
	mergeSort(right);
	merge(left, right, A);

	return A;
}



let arr = [2,4,1,6,8,5,3,7];
console.log(mergeSort(arr));