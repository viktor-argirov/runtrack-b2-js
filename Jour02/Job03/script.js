function myDisplayText(){
    const inputText = document.getElementById("input-text").value;
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.textContent = inputText;
}

function myTurnBold() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontWeight = "bold";
    textDisplayer.style.fontStyle = "normal";
}

function myTurnItalic() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontStyle = "italic";
    textDisplayer.style.fontWeight = "normal";
}

function myClearText() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.textContent = "";
    textDisplayer.style.fontWeight = "normal"; 
    textDisplayer.style.fontStyle = "normal"; 
}
