function myArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const myArray = [4, 24, 52, 14, 32, 56];
const result = myArraySum(myArray);

console.log("La somme des éléments du tableau est : " + result);
