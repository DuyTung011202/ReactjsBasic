function isPrimeNumber(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


let total = []
function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPrimeNumber(arr[i])) {
            total.push(arr[i]);
        }
    }
    return total
}

console.log(printArr([1, 2, 3, 4, 5, 6, 7]))