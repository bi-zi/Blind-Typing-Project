const first = [
  {
    id: 'Backquote',
    divClass: 'c0',
    symbol: 'ё'
  },
  {
    id: 'Digit1',
    divClass: 'c1',
    symbol: '1'
  },
  {
    id: 'Digit2',
    divClass: 'c1',
    symbol: '2'
  },
  {
    id: 'Digit3',
    divClass: 'c2',
    symbol: '3'
  },
  {
    id: 'Digit4',
    divClass: 'c3',
    symbol: '4'
  },
  {
    id: 'Digit5',
    divClass: 'c4',
    symbol: '5'
  },
  {
    id: 'Digit6',
    divClass: 'c4',
    symbol: '6'
  },
  {
    id: 'Digit7',
    divClass: 'c5',
    symbol: '7'
  },
  {
    id: 'Digit8',
    divClass: 'c3',
    symbol: '8'
  },
  {
    id: 'Digit9',
    divClass: 'c2',
    symbol: '9'
  },
  {
    id: 'Digit0',
    divClass: 'c1',
    symbol: '0'
  },
  {
    id: 'Minus',
    divClass: 'c1',
    symbol: '-'
  },
  {
    id: 'Equal',
    divClass: 'c1',
    symbol: '='
  },
  {
    id: 'Backspace',
    divClass: 'kBack',
    symbol: '←'
  },
]

const second = [
  {
    id: 'Tab',
    divClass: 'kTab',
    symbol: 'Tab'
  },
  {
    id: 'KeyQ',
    divClass: 'c1',
    symbol: 'й'
  },
  {
    id: 'KeyW',
    divClass: 'c2',
    symbol: 'ц'
  },
  {
    id: 'KeyE',
    divClass: 'c3',
    symbol: 'у'
  },
  {
    id: 'KeyR',
    divClass: 'c4',
    symbol: 'к'
  },
  {
    id: 'KeyT',
    divClass: 'c4',
    symbol: 'е'
  },
  {
    id: 'KeyY',
    divClass: 'c5',
    symbol: 'н'
  },
  {
    id: 'KeyU',
    divClass: 'c5',
    symbol: 'г'
  },
  {
    id: 'KeyI',
    divClass: 'c3',
    symbol: 'ш'
  },
  {
    id: 'KeyO',
    divClass: 'c2',
    symbol: 'щ'
  },
  {
    id: 'KeyP',
    divClass: 'c1',
    symbol: 'з'
  },
  {
    id: 'BracketLeft',
    divClass: 'c1',
    symbol: 'х'
  },
  {
    id: 'BracketRight',
    divClass: 'c1',
    symbol: 'ъ'
  },
  {
    id: 'Backslash',
    divClass: 'kSlash',
    symbol: `\x2f`
  },
]

const third = [
  {
    id: 'CapsLock',
    divClass: 'kCaps',
    symbol: 'Caps'
  },
  {
    id: 'KeyA',
    divClass: 'c1',
    symbol: 'ф'
  },
  {
    id: 'KeyS',
    divClass: 'c2',
    symbol: 'ы'
  },
  {
    id: 'KeyD',
    divClass: 'c3',
    symbol: 'в'
  },
  {
    id: 'KeyF',
    divClass: 'c4',
    symbol: 'а'
  },
  {
    id: 'KeyG',
    divClass: 'c4',
    symbol: 'п'
  },
  {
    id: 'KeyH',
    divClass: 'c5',
    symbol: 'р'
  },
  {
    id: 'KeyJ',
    divClass: 'c5',
    symbol: 'о'
  },
  {
    id: 'KeyK',
    divClass: 'c3',
    symbol: 'л'
  },
  {
    id: 'KeyL',
    divClass: 'c2',
    symbol: 'д'
  },
  {
    id: 'Semicolon',
    divClass: 'c1',
    symbol: 'ж'
  },
  {
    id: 'Quote',
    divClass: 'c1',
    symbol: 'э'
  },
  {
    id: 'Enter',
    divClass: 'kEnter',
    symbol: 'Enter'
  },
]

const fourth = [
  {
    id: 'ShiftLeft',
    divClass: 'Shift',
    symbol: 'Shift'
  },
  {
    id: 'KeyZ',
    divClass: 'c1',
    symbol: 'я'
  },
  {
    id: 'KeyX',
    divClass: 'c2',
    symbol: 'ч'
  },
  {
    id: 'KeyC',
    divClass: 'c3',
    symbol: 'с'
  },
  {
    id: 'KeyV',
    divClass: 'c4',
    symbol: 'м'
  },
  {
    id: 'KeyB',
    divClass: 'c4',
    symbol: 'и'
  },
  {
    id: 'KeyN',
    divClass: 'c5',
    symbol: 'т'
  },
  {
    id: 'KeyM',
    divClass: 'c3',
    symbol: 'ь'
  },
  {
    id: 'Comma',
    divClass: 'c3',
    symbol: 'б'
  },
  {
    id: 'Period',
    divClass: 'c2',
    symbol: 'ю'
  },
  {
    id: 'Slash',
    divClass: 'c1',
    symbol: '.'
  },
  {
    id: 'ShiftRight',
    divClass: 'Shift',
    symbol: 'Shift'
  },
]

const fifth = [
  {
    id: 'Space',
    divClass: 'kSpace',
    symbol: ' '
  }
]

const keyboardKeys = [first, second, third, fourth, fifth]



export const generateKeyboard = () => {
  let keys = ''
  const keyboard = document.querySelector('.keyboard__keys')

  for (let i = 0; i < keyboardKeys.length; i++) {
    const arr = []
    for (let j = 0; j < keyboardKeys[i].length; j++) {
      keys = `<i id="${keyboardKeys[i][j].id}" ><div class="${keyboardKeys[i][j].divClass}" id="keyId${keyboardKeys[i][j].symbol}">${keyboardKeys[i][j].symbol}${keyboardKeys[i][j].symbol === 'а' || keyboardKeys[i][j].symbol === 'о' ? `<span class="forefinger"></span>` : ''}</div></i>`

      arr.push(keys)

      if (j === keyboardKeys[i].length - 1) {
        const element = `<div class="row" id="rowId${i}">${arr.join(' ')}</div>`

        keyboard.insertAdjacentHTML('beforeend', element)
      }
    }
  }
}

// Показ/скрытие клавиатуры при клике на иконку
const hideKeyborad = document.getElementById('keyboardIcon');
hideKeyborad.addEventListener('click', () => {
  const hideShowKeyboard = document.getElementById('showKeyboard');
  hideShowKeyboard.style.visibility = hideShowKeyboard.style.visibility === 'hidden' ? 'visible' : 'hidden';
});
