import { inputСharСolor } from "./charColors.js";
import { selectedText } from "./texts.js";
import { netAverageSpeed } from "./speed.js";

let symbolIndex = 0;
let sumErrors = 0

export const clickHandling = (smallKeys) => {
  let uselessKeys = smallKeys === 'Tab' || smallKeys === 'Enter' || smallKeys === 'Backspace'
  if (uselessKeys) return

  let keyboardStyle = ''
  // классу "selectedText" находит символ или букву по индексу
  let textSymbol = selectedText.childNodes[symbolIndex].textContent;
  inputСharСolor(symbolIndex);

  // Если шифт или капс зачат(true) классу "Keyboard" добавляется класс "keyboardStyle" это изменяет вводимые буквы на большие и заменяет символы
  document.querySelector('.text__transform') ? (keyboardStyle = true) : (keyboardStyle = false);


  // Обрабатывает символы и присваивает новый класс правильный символ = зеленый фон, неправильный красный и отсылает символ индекс чтобы можно было менять цвет для следующего символа на желтый
  if (
    smallKeys != 'ShiftLeft' &&
    smallKeys != 'Space' &&
    smallKeys != 'CapsLock'
  ) {
    let charFromKeyboard = document
      .getElementById(smallKeys)
      .getElementsByTagName('div')[0].childNodes[0].textContent

    if (textSymbol === charFromKeyboard && keyboardStyle === false) {
      selectedText.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
      netAverageSpeed(symbolIndex)
    }
    if (textSymbol === charFromKeyboard.toUpperCase() && keyboardStyle === true) {
      selectedText.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
      netAverageSpeed(symbolIndex)
    } else if (
      textSymbol != charFromKeyboard ||
      (keyboardStyle === true && textSymbol != charFromKeyboard.toUpperCase())
    ) {
      selectedText.childNodes[symbolIndex].className = 'red__backgroud';
      if (symbolIndex < 1) return
      errorCounter(1);
    }
  } else if (smallKeys === 'Space' && textSymbol === ' ') {
    let bigCharFromKeyboard = document
      .getElementById(smallKeys)
      .getElementsByTagName('div')[0].childNodes[0].textContent;
    if ((textSymbol === bigCharFromKeyboard && keyboardStyle === false) || keyboardStyle === true) {
      selectedText.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
      netAverageSpeed(symbolIndex)
    }
  }

  return symbolIndex
};


export const setIntervalId = setInterval(() => {
  if (symbolIndex > 0) {
    netAverageSpeed(symbolIndex)
  }
}, 1);

// Функция показывает сумму ошибок
const errorCounter = (err) => {
  sumErrors += err;
  document.getElementById('errors').textContent = sumErrors;
  document.getElementById('mistake').getElementsByTagName('span').item(0).innerHTML = `${sumErrors}`;
};
