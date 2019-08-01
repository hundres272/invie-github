let correo = document.getElementById("mail");
let clave = document.getElementById("pass");
button = document.getElementById("boton");

button.addEventListener("mousedown",accionesLogin);

function accionesLogin(){
  if(correo.value == "hugo" &&  clave.value == "hola"){
    alert("Bienvenido");
  }else{
    alert("Datos erroneos");
  }
}
