function reset() {
    document.getElementById("text").style.transition = ".25s ease-in-out";
    document.getElementById("text").style.color = "rgb(54, 54, 54)";
    document.getElementById("text").innerHTML = "Hover over a button ...";
}

function set(str, clr) {
    document.getElementById("text").style.transition = ".25s ease-in-out";
    document.getElementById("text").style.color = clr;
    document.getElementById("text").innerHTML = str;
}