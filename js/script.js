const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()
    let caracteresValidos = /^[a-zA-z\s]+$/;
    if(!caracteresValidos.test(stringEncriptada)){
      alert("Solo letras, sin numeros ni caracteres especiales");
      return;
    }

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function copiarTexto() {
  const textoCopiado = document.querySelector('.mensaje');
  const botonCopiar = document.querySelector('.btn-copiar');

  if (botonCopiar.textContent === 'Copiar') {
    navigator.clipboard.writeText(textoCopiado.value)
      .then(() => {
        console.log('Texto copiado al portapapeles');
        botonCopiar.textContent = 'Pegar';
      })
      .catch((err) => {
        console.error('Error al copiar texto: ', err);
      });
  } else {
    navigator.clipboard.readText()
      .then((text) => {
        const textoPegado = document.querySelector('.text-area');
        textoPegado.value = text;
        console.log('Texto pegado en el textarea');
        if (botonCopiar.classList.contains('btn-encriptar')) {
          btnEncriptar();
        } else if (botonCopiar.classList.contains('btn-desencriptar')) {
          btnDesencriptar();
        }
        botonCopiar.textContent = 'Copiar';
      })
      .catch((err) => {
        console.error('Error al pegar texto: ', err);
      });
  }
}
