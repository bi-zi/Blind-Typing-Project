export const upperCaseHandler = (e) => {

  if (!e.repeat) {
    keySwapColor(e, false);
  }
  if (
    e.code === 'CapsLock' &&
    document.getElementById('one').getElementsByTagName('span').item(0).innerHTML === '!'
  ) {
    document.getElementById('showKeyboard').classList.toggle('text__transform');
    swapSymbols(false);
  } else if (
    e.code === 'CapsLock' &&
    document.getElementById('one').getElementsByTagName('span').item(0).innerHTML === '1'
  ) {
    document.getElementById('showKeyboard').classList.toggle('text__transform');
    swapSymbols(true);
  }
}


export const keySwapColor = (e, timer) => {

  for (let key of document.querySelectorAll('.row i')) {
    if (key.id === e.code) {
      if (timer) {
        setTimeout(() => {
          key.getElementsByTagName('div').item(0).classList.toggle('clickSwapColor');
        }, 35)
      } else {
        key.getElementsByTagName('div').item(0).classList.toggle('clickSwapColor')
      }
    }
    if (key.id === e.code && (e.code === 'ShiftLeft' || e.code === 'ShiftRight')) {
      document.getElementById('showKeyboard').classList.toggle('text__transform');
      swapSymbols(true);
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
