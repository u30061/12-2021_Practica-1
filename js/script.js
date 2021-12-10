function ingreso()
{
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let cadena = "usuario: "+usuario + ", password: "+password;
    console.log(cadena);
    alert(cadena);
}
function registro()
{
    let nombre_completo = document.getElementById("nombre-completo").value;
    let email = document.getElementById("email").value;
    let password_registro = document.getElementById("password-registro").value;

    let cadena = "nombre-completo: "+nombre_completo + ", email: "+email + ", password: "+password_registro;
    console.log(cadena);
    alert(cadena);
}

function agregar() {
    var listaIngresados = document.getElementById("ingresados");

    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var cui = document.getElementById("cui").value;
    var departamento = document.getElementById("departamento").value;

    listaIngresados.innerHTML = listaIngresados.innerHTML + "<li>" + cui + ", " + nombres + " " + apellidos + ", " + departamento + "</li>";
}
