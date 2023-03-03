const cipher = {
  encode, decode
};

const commonAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function encode(offset, message){
  console.log("offset: " + offset)
  console.log("message: " + message)
  if(!offset || !message) throw new TypeError;

  let encryptMessage = "";

  for(let i = 0; i < message.length; i++){
    const letter = message[i];
    console.log("letter: " + message)
    const index = indexOfLetter(letter, commonAlphabet)
    console.log("index: " + index)

    if(index === -1){
      encryptMessage += letter;
    } else {
      let newIndex = (index+offset) % commonAlphabet.length;
      console.log("newIndex: " + newIndex)

      if(newIndex < 0) newIndex = commonAlphabet.length + newIndex;
      encryptMessage += commonAlphabet[newIndex];
    }
  }
  return encryptMessage;
}

function indexOfLetter(letter, alphabet){
  for(let i = 0; i < alphabet.length; i++){
    if(letter === alphabet[i]) return i;
  }
  return -1;
}

function decode(offset, message){
  if(!offset || !message) throw new TypeError;

  return encode(offset*-1, message);
}

export default cipher;
