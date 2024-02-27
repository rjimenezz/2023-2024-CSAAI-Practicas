console.log("Ejecutando JS...");

const elemento = document.getElementById("elemento");
const boton = document.getElementById("boton");

let visible = false;

boton1.onclick = () => {
  console.log("Clic!");

  //-- Alternar visibilidad
  if (visible) {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
  visible = !visible;

}
boton2.onclick = () => {
    console.log("Clic!");

    //Cambiar color
    elemento.style.backgroundColor = "blue"
  }
function random_color () {
    //Calcula los valores rgb de manera aleatoria por separado 
    //combina un único valor hexadecumal válido quie es rcolor
    
    return rcolor
}