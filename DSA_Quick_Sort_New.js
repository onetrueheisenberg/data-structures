function sort(array, left = 0, right = array.length - 1) {
    if ( left < right ) {
        let pivotIndex = pivot(array, left, right);
        
        sort(array, left, pivotIndex - 1);
        sort(array, pivotIndex + 1, right);
    }
    return array;
}

function pivot( array, pivotIndex = 0, endIndex = array.length - 1 ) {
    let swapIndex = pivotIndex;
    for ( let i = pivotIndex + 1; i <= endIndex; i++ ) {
        if ( array[i] < array[pivotIndex] ) {
            swapIndex++;
            swap( array, swapIndex, i);
        }
    }
    swap( array, pivotIndex, swapIndex);
    return swapIndex;
}

function swap( array, firstI, secondI ) {
    let temp = array[firstI];
    array[firstI] = array[secondI];
    array[secondI] = temp;
}

let array = [1439, 400, 976, 1, 123, 4965, 213, 213542, 123263, 2193];
sort(array);
console.log(sort(array));