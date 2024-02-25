console.log("Ejecutando js...")
//-- Leer el boton identificado como bt1
const dsp1 = document.getElementById('disp1')

//-- Leer el boton identificado como bt1
const btn1 = document.getElementById('bt1')

//-- Leer el botn identificado como bt2
const btn2 = document.getElementById('bt2')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
btn1.onclick = () => {
  console.log("Click sobre el boton 1")
  dsp1.innerHTML += " 1"

  if(dsp1.style.backgroundColor == ""){
    dsp1.style.backgroundColor= "yellow";
  }

  else{
    dsp1.style.backgroundColor="";
  }
  //-- Cambiar su texto
}

btn2.onclick = () => {
  console.log("Click sobre el boton 2")
  dsp1.innerHTML += " 2"

  //-- Cambiar su texto
}