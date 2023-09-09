function myAddCount() {
    const countDisplayer = document.getElementById("count-displayer");

    let count = parseInt(countDisplayer.textContent);

    count++;

    countDisplayer.textContent = count;
}

const addButton = document.getElementById("add-count-btn");

addButton.addEventListener("click", myAddCount);
