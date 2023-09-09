function myCountChar(haystack, needle) {
    let count = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }

    return count;
}

const myString = "Hello, World!";
const charToCount = "l";
const countResult = myCountChar(myString, charToCount);

console.log(`Le caractère "${charToCount}" apparaît ${countResult} fois dans la chaîne.`);