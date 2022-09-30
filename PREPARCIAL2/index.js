var inputPesos = document.getElementById("pesos");
var selectMoneda = document.getElementById("moneda");

var botoncit = document.querySelector("button#calc");

var cotizaciones = {
    dolares: 105.75,
    euros: 120.5,
};

function alertError(inputID) {
    var inputWithErrors = document.getElementById(inputID);
    inputWithErrors.className = "error";
}
botoncit.onclick = function() {
    if (validate()) {
        var valorPesos = Numer(inputPesos.value);
        var valorMoneda = Number(cotizaciones[selectMoneda.value]);

        var precioFinal = valorPesos * valorMoneda;
        displayResult(precioFinal);
    } else {
        alert("la re cagaste pibe");
    }
};

var inputNombre = document.getElementById("nombre");
var inputValor = document.getElementById("valor");

var botoncitNuevaMoneda = document.querySelector("button#nuevaMoneda");

function nuevaMonedaValidar() {
    clearErrors(inputNombre.id);
    clearErrors(inputValor.id);
    clearErrors(inputNombre.id);
    clearErrors(inputValor.id);

    var validar = true;

    if (!inputNombre.value) {
        alertError(inputNombre.id);
        validar = false;
    }
    return validar;
}
botoncitNuevaMoneda.onclick = function() {
    if (nuevaMonedaValidar()) {
        var nombreMoneda = inputNombre.value;
        var valorMoneda = Number(inputValor.value);

        selectMoneda.options.add(new Option(nombreMoneda, nombreMoneda));

        cotizaciones[nombreMoneda] = valorMoneda;

        inputNombre.value = "";
        inputValor.value = "";
    } else {
        alert("algo malio sal");
    }
}
