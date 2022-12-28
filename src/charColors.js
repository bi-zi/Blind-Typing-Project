import { selectedText } from "./randomText.js";
import { setIntervalId } from "./keyUp.js";
import { results } from "./results.js";

export const inputСharСolor = (symbolIndex) => {

  if (symbolIndex < selectedText.childNodes.length) {
    selectedText.childNodes.item(symbolIndex).className = 'yellow__backgroud';

    const shiftSymbols = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ',']
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '.']

    const findLastSymbol = symbolIndex > 0 ? symbolIndex - 1 : symbolIndex

    const selectedIndex = shiftSymbols.findIndex(x => x === selectedText.childNodes.item(symbolIndex).textContent)

    const lastIndex = shiftSymbols.findIndex(x => x === selectedText.childNodes.item(findLastSymbol).textContent)

    const lastShownChar = selectedText.childNodes.item(findLastSymbol).textContent
    const lastShown = document.getElementById(`keyId${lastShownChar.toLowerCase()}`)

    const selectedShownChar = selectedText.childNodes.item(symbolIndex).textContent
    const selectedShown = document.getElementById(`keyId${selectedShownChar.toLowerCase()}`)

    const lastBigChar = lastShownChar.match(/[а-я]/i) && lastShownChar === lastShownChar.toUpperCase() ? true : false
    const selectedBigChar = selectedShownChar.match(/[а-я]/i) && selectedShownChar === selectedShownChar.toUpperCase() ? true : false

    const lastHidden = document.getElementById(`keyId${keys[lastIndex]}`)
    const hidden = document.getElementById(`keyId${keys[selectedIndex]}`)

    const shift = document.getElementById(`keyIdShift`)


    if (selectedShown !== null) {

      if (lastShown !== null) {
        if (lastShown.classList.contains('keyHover')) {
          lastShown.classList.remove('keyHover')

          lastBigChar ? shift.classList.remove('blink7') : null
        }
      }

      if (lastHidden !== null) {
        if (lastHidden.classList.contains('keyHover')) {
          lastHidden.classList.remove('keyHover')
          shift.classList.remove('blink7')
        }
      }

      if (selectedShown !== null) {

        selectedShown.classList.add('keyHover')

        selectedBigChar ? shift.classList.add('blink7') : null

      }

    } else {



      if (lastShown !== null) {
        if (lastShown.classList.contains('keyHover')) {
          lastShown.classList.remove('keyHover')
          lastBigChar ? shift.classList.remove('blink7') : null
        }
      }

      if (lastHidden !== null) {
        if (lastHidden.classList.contains('keyHover')) {
          lastHidden.classList.remove('keyHover')
          shift.classList.remove('blink7')
        }
      }

      if (hidden !== null) {
        hidden.classList.add('keyHover')
        shift.classList.add('blink7')
      }
    }


  } else if (symbolIndex >= selectedText.childNodes.length) {
    results(symbolIndex);
    clearInterval(setIntervalId);
  }

};
