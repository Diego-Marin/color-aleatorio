const boton  = document.querySelector('button');
const nombreColor = document.getElementById('color');

function crearColorHexAleatorio (){
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex = colorHex + digitos[indiceAleatorio]
  };
  return colorHex;
};

boton.addEventListener('click', function(){
  let colorAleatorio = crearColorHexAleatorio();
  nombreColor.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
  
});

