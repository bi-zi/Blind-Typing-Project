

export const capsHandler = (e, systemCaps) => {
  if (!e.repeat) {

    const showKeyboard = document.getElementById('showKeyboard')

    const checkClass = showKeyboard.classList.contains('text__transform')

    const checkShift = e.code !== 'ShiftLeft' && e.code !== 'ShiftRight'

    if (checkShift) {

      if (systemCaps) {

        showKeyboard.classList.add('text__transform')
        swapSymbols(systemCaps)

      } else if (!systemCaps) {

        showKeyboard.classList.remove('text__transform')
        swapSymbols(systemCaps)

      }
    } else {
      if (checkClass) {

        showKeyboard.classList.remove('text__transform')
        swapSymbols(false)

      } else {

        showKeyboard.classList.add('text__transform')
        swapSymbols(true)
      }
    }
  }
}

export const swapSymbols = (checkShift) => {


  let changeableKeys = [
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Slash',
  ];
  let secondTypeOfKeys = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', ','];
  let firstTypeOfKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '.'];
  let i = 0;

  changeableKeys.forEach(
    (x) =>
    (document.getElementById(x).getElementsByTagName('div')[0].childNodes[0].textContent = `${checkShift ? secondTypeOfKeys[i++] : firstTypeOfKeys[i++]
      }`),
  );
}
