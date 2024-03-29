import { inputСharСolor } from "./charColors.js";
import { selectedText } from "./randomText.js";
import { netAverageSpeed } from "./speed.js";



export const clickHandling = (smallKeys) => {
  let symbolIndex = +sessionStorage.getItem('symbolIndex');
  const text = document.getElementById('myList')

  let keyboardStyle = ''
  // классу "selectedText" находит символ или букву по индексу
  let textSymbol = selectedText.childNodes[symbolIndex].textContent;

  const value = document.getElementById('textPanelInput').value

  if (value.length === 10) document.getElementById('textPanelInput').value = ''

  // console.log([...text.childNodes].filter(x => x.className !== 'green__background'))

  if (sessionStorage.intervalId) startInterval()

  // Если шифт или капс зачат(true) классу "Keyboard" добавляется класс "keyboardStyle" это изменяет вводимые буквы на большие и заменяет символы
  document.querySelector('.text__transform') ? (keyboardStyle = true) : (keyboardStyle = false);


  // Обрабатывает символы и присваивает новый класс правильный символ = зеленый фон, неправильный красный и отсылает символ индекс чтобы можно было менять цвет для следующего символа на желтый
  if (
    smallKeys !== 'ShiftLeft' &&
    smallKeys !== 'Space' &&
    smallKeys !== 'CapsLock'
  ) {
    let charFromKeyboard = document
      .getElementById(smallKeys)
      .getElementsByTagName('div')[0].childNodes[0].textContent

    if (textSymbol === charFromKeyboard && keyboardStyle === false) {
      selectedText.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
      netAverageSpeed(symbolIndex, false, true)
    }
    if (textSymbol === charFromKeyboard.toUpperCase() && keyboardStyle === true) {
      selectedText.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
      netAverageSpeed(symbolIndex, false, true)
    } else if (
      textSymbol != charFromKeyboard ||
      (keyboardStyle === true && textSymbol != charFromKeyboard.toUpperCase())
    ) {
      selectedText.childNodes[symbolIndex].className = 'red__backgroud';
      if (symbolIndex < 1) return
      errorCounter(1, false);
    }
  } else if (smallKeys === 'Space' && textSymbol === ' ') {
    let bigCharFromKeyboard = document
      .getElementById(smallKeys)
      .getElementsByTagName('div')[0].childNodes[0].textContent;
    if ((textSymbol === bigCharFromKeyboard && keyboardStyle === false) || keyboardStyle === true) {
      selectedText.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
      netAverageSpeed(symbolIndex, false, true)
    }
  }

  sessionStorage.setItem('symbolIndex', symbolIndex);

  return symbolIndex
};


export const startInterval = () => {
  let setIntervalId = setInterval(() => {
    let symbolIndex = +sessionStorage.getItem('symbolIndex')
    if (symbolIndex > 0) {
      netAverageSpeed(symbolIndex, false, true)
    }
  }, 1);

  sessionStorage.setItem('intervalId', setIntervalId)

}

let sumErrors = 0
// Функция показывает сумму ошибок
export const errorCounter = (err, restart) => {
  sumErrors = restart ? 0 : sumErrors
  sumErrors += err;

  document.getElementById('errors').textContent = sumErrors;
  document.getElementById('mistake').getElementsByTagName('span').item(0).innerHTML = `${sumErrors}`;
};
