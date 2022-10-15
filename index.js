function convertir(){
    var valor1 = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 290;
    var euro = 147;
    if (document.getElementById("dolar").checked){
        resultado = valor1 * dolar;
        alert("El cambio de Pesos Argetinos a Dolares: $" + resultado);
    }
    else if (document.getElementById("euro").checked){
        resultado = valor1 * euro;
        alert("El cambio de Pesos Argetinos a Euros: €" + resultado);
    }   
    else{
        alert("Tenes que completar todos los requerimentos")
    }
}