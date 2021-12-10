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
    let password_registro_repetir = document.getElementById("password-registro-repetir").value;

    if (password_registro===password_registro_repetir)
    {
        let cadena = "nombre-completo: " + nombre_completo + ", email: " + email + ", password: " + password_registro;
        console.log(cadena);
        alert(cadena);
    }
        else
        {        
            alert("CONTRASENIAS NO COINCIDEN")
        }
}

function agregar() {
    var listaIngresados = document.getElementById("ingresados");

    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var cui = document.getElementById("cui").value;
    var departamento = document.getElementById("departamento").value;
    let cadena1 = cui + ", " + nombres + " " + apellidos + ", " + departamento
    let cadena2 = "<li>" + cadena1 + "</li>"
    console.log(cadena1);
    listaIngresados.innerHTML = listaIngresados.innerHTML + cadena2;
}
