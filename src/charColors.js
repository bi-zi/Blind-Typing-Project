import { selectedText } from "./randomText.js";
import { setIntervalId } from "./keyUp.js";
import { results } from "./results.js";

export const inputСharСolor = (symbolIndex) => {

  if (symbolIndex < selectedText.childNodes.length) {
    selectedText.childNodes.item(symbolIndex).className = 'yellow__backgroud';

    // const hiddenCharacters = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ',']
    // const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '.']

    // const selectedSymbol = selectedText.childNodes.item(symbolIndex > 0 ? symbolIndex - 1 : symbolIndex).textContent
    // const selectedSymbol = selectedText.childNodes.item(symbolIndex > 0 ? symbolIndex - 1 : symbolIndex).textContent
    // const index = hiddenCharacters.findIndex(x => x === selectedSymbol)
    // console.log(index)

    // if (index === -1) {
    //   console.log(1)
    //   document.getElementById(`keyId${selectedSymbol.toLowerCase()}`).classList.add('keyHover')
    // } else {
    //   console.log(2)
    //   document.getElementById(keys[index]).classList.add('keyHover')
    // }

    // console.log(selectedSymbol)


    // const keyboardBehindId = `keyId${selectedSymbol.textContent.toLowerCase()}}`

    // const keyboardKeyId = `keyId${selectedText.childNodes.item(symbolIndex).textContent.toLowerCase()}`





    // const index = hiddenCharacters.findIndex(x => x === selectedSymbol)

    // console.log(keyboardBehindId)

    // if (document.getElementById(keyboardBehindId).classList.contains('keyHover') && index !== -1) {
    //   document.getElementById(keyboardBehindId).classList.remove('keyHover')
    // }


    // if (index !== -1) {

    //   if (document.getElementById(`keyId${keys[index]}`).classList.contains('keyHover')) {
    //     document.getElementById(`keyId${keys[index]}`).classList.remove('keyHover')
    //   }

    //   document.getElementById(`keyId${keys[index]}`).classList.add('keyHover')
    // } else {


    //   document.getElementById(keyboardKeyId).classList.add('keyHover')
    // }



  } else if (symbolIndex >= selectedText.childNodes.length) {
    results(symbolIndex);
    clearInterval(setIntervalId);
  }

};
