function mySquareArray(array) {
    if (!Array.isArray(array)) {
        console.log("Veuillez passer un tableau en paramètre.");
        return;
    }

    const squaredArray = [];

    for (let i = 0; i < array.length; i++) {
        const square = array[i] * array[i];
        squaredArray.push(square);
    }

    console.log("Résultat des carrés :", squaredArray);
}

const inputArray = [3, 8, 4, 2, 5];
mySquareArray(inputArray);