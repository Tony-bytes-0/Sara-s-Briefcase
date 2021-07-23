var formulario = document.getElementsByTagName("formulario")[0],
elementos = formulario.elements,
boton= document.getElementById("btn");


var validar = function(e){
    if (formulario.nombre.value == 0){
        aler("inserte el nombre");
        e.preventDefault();
    }
}
var validar = function(e){
    validarNombre(e)
    validarRadio(e)
    validarCheckbox(e)
}
var validarRadio = function(e){
    if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
    }else{
        alert("completa el campo de sexo");
        e.preventDefault();
    }
var validarCheckbox = function(e){
    if(formulario.terminos.checked == false){
        alert("acept");
        e.preventDefault();
    }
}
}
formulario.addEventListener("submit", validar);
