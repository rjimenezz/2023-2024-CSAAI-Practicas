//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),
  }
  window.alert('TIENES QUE ADIVINAR EL CODIGO SECRETO PERO TIENES 10 INTENTOS, BUENA SUERTE')
  const botones = document.getElementsByClassName("digito")
  const display_num_1 = document.getElementById("display_num_1");
  const display_num_2 = document.getElementById("display_num_2");
  const display_num_3 = document.getElementById("display_num_3");
  const display_num_4 = document.getElementById("display_num_4");
  
  const display_error= document.getElementById("display_errores");

  //-- Definir un objeto cronómetro
const crono = new Crono(gui.display);