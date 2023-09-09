function myIsInString(needle, haystack) {
    return haystack.includes(needle);
}

const myString = "Hello, World!";
const substringToFind = "World";
const isInString = myIsInString(substringToFind, myString);

console.log(`La chaîne "${substringToFind}" se trouve dans la chaîne principale : ${isInString}`);
