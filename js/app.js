/**
 * La validación debe verificar que el código sea exactamente de 8 caracteres y siempre debe comenzar con la letra A. Mostrar en un párrafo el mensaje si el código es valido o no.
 */
const button = document.getElementById("btn");
const respuesta = document.getElementById("mostrar");
//addEventListener se reemplaza por onclick para no poner lógica en html
button.addEventListener('click',
function validar() {
    //otra forma de obtener el dato.
    //var pass = $(`#code`).val();
    var pass = document.getElementById("code").value;
    
    console.log(pass);
    console.log(pass.length);
    console.log(pass.charAt(0));
    if(pass.length == 8 && pass.charAt(0) == "A" ){
        respuesta.innerHTML = `<p>El código es valido</p>`;
    }else{
        respuesta.innerHTML = `<p>El código no es valido</p>`;
    }
});