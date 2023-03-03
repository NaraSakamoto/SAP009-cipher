import cipher from './cipher.js';

document.getElementById("encodeBtn").addEventListener("click", encode);
document.getElementById("decodeBtn").addEventListener("click", decode);

function encode(){
  const textToEncode = document.getElementById("textToEncode").value;
  const offset = document.getElementById("offset").value;
  
  document.getElementById("textToDecode").value = cipher.encode(offset, textToEncode);

  alert("Texto traduzido com sucesso!")
}

function decode(){
  const textToDecode = document.getElementById("textToDecode").value;
  const offset = document.getElementById("offset").value;
    
  document.getElementById("textToEncode").value = cipher.decode(offset, textToDecode);
  
  alert("Texto traduzido com sucesso!")
}