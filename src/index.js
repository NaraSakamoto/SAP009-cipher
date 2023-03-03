import cipher from './cipher.js';

document.getElementById("encodeBtn").addEventListener("click", encode);

function encode(){
  const textToEncode = document.getElementById("textToEncode").value;
  const offset = document.getElementById("encodeOffset").value;
  
  document.getElementById("textToDecode").value = cipher.encode(offset, textToEncode);

  alert("Texto traduzido com sucesso!")
}