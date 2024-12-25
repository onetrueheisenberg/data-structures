function sort(array) {
    for ( let i = 0; i < array.length - 1; i++ ) {
        let currentMin = i;
        for ( let j = i+1; j < array.length; j++) {
            if ( array[j] < array[currentMin] ) {
                currentMin = j;
            }
        }
        if ( i !== currentMin ) {
            let temp = array[currentMin];
            array[currentMin] = array[i];
            array[i] = temp;
        }
        console.log(array);
    }
    return array;
}

let array = [1, 400, 976, 123, 1439, 4965, 213, 213542, 123263, 2193];
sort(array);
// console.log(sort(array));