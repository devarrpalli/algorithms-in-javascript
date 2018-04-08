'use strict';


function quickSort(A) {
	let start = 0;
	let end = A.length - 1;

	qsort(A, start, end);
	return A;
}


function qsort(A, start, end) {	
	if (start < end) {
		let pIndex = partition(A, start, end);
		qsort(A, start, pIndex-1);
		qsort(A, pIndex+1, end);
	}
}

function partition(A, start, end) {
	let pivot = A[end];
	let pIndex = start;

	for (let i = start; i < end; i++) {
		if(A[i] <= pivot) {
			swap(A, i, pIndex);
			pIndex++;
		}
	}

	swap(A, pIndex, end);
	return pIndex;
}

function swap(A, i, j) {
	let temp = A[i];
	A[i] = A[j];
	A[j] = temp;
}


let arr = [7,2,1,6,8,5,3,4];
console.log(quickSort(arr));