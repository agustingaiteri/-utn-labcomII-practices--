function contador_clicks() {
    if (Storage !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Clickeaste un total de: " + localStorage.clickcount + " veces.";
    }
}
function resetCounter() {
    localStorage.clickcount = 0;
}
