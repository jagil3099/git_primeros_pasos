function sumar()
{
    let x=parseFloat(document.getElementById("entrada1").value);
    let y=parseFloat(document.getElementById("entrada2").value);
    document.getElementById("Salida").innerHTML="La suma es: "+(x+y);
}