function sort(array) {
    for ( let i = 0; i < array.length - 1; i++ ) {
        for ( let j = 0; j < array.length; j++ ) {
            if ( array[j] > array[j+1] ) {
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
            console.log(array)
        }
    }
    return array;
}

let array = [1, 400, 976, 123, 1439, 4965, 213, 213542, 123263, 2193];
sort(array);
// console.log(sort(array));