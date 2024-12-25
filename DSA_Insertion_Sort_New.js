function sort(array) {
    let temp;
    for ( let i = 1; i < array.length; i++ ) {
        temp = array[i];
        for ( var j = i - 1; array[j] > temp && j > -1;j-- ) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    } 
    return array;
}

let array = [1, 400, 976, 123, 1439, 4965, 213, 213542, 123263, 2193];
// sort(array);
console.log(sort(array));