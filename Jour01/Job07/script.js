// Définir la fonction myNearZero qui prend un tableau en paramètre
function myNearZero(array) {
    if (!Array.isArray(array)) {
        console.log("Veuillez passer un tableau en paramètre.");
        return;
    }

    let nearest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (Math.abs(array[i]) < Math.abs(nearest)) {
            nearest = array[i];
        } else if (Math.abs(array[i]) === Math.abs(nearest) && array[i] > nearest) {
            nearest = array[i];
        }
    }

    console.log("Entier le plus proche de zéro :", nearest);
}

const inputArray1 = [3, 8, 4, 2, 5];
const inputArray2 = [-1, -4, 2, 5, 6, 9];
myNearZero(inputArray1);
myNearZero(inputArray2);
