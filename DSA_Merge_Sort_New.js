function sort(array) {
    if ( array.length === 1 ) return array;
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length); 
    
    return merge(sort(left), sort(right));
}

function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while ( i < array1.length && j < array2.length ) {
        if ( array1[i] < array2[j] ) {
            combined.push(array1[i]);
            i++;
        } else if ( array1[i] > array2[j] ) {
            combined.push(array2[j]);
            j++;
        } else {
            combined.push(array1[i]);
            combined.push(array2[j]);
            i++;
            j++;
        }
    }
    while ( i < array1.length ) {
        combined.push(array1[i]);
        i++;
    }
    while ( j < array2.length ) {
        combined.push(array2[j]);
        j++;
    }
    return combined;
}

let array = [1, 400, 976, 123, 1439, 4965, 213, 213542, 123263, 2193];
sort(array);
console.log(sort(array));