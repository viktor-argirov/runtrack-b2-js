function myArraySort(array, sorting) {
    if (sorting === "croissant") {
        return array.sort((a, b) => a - b);
    } else if (sorting === "décroissant") {
        return array.sort((a, b) => b - a);
    } else {
        console.error("Paramètre de tri invalide. Utilisez 'croissant' ou 'décroissant'.");
    }
}

const tableau1 = [3, 8, 4, 2, 5];
const tableau2 = [-1, -4, 2, 5, 6, 9];

console.log("Tableau trié en ordre croissant : ", myArraySort(tableau1, "croissant"));
console.log("Tableau trié en ordre décroissant : ", myArraySort(tableau2, "décroissant"));
