import { getRandomText } from "./randomText.js";
import { generateKeyboard } from "./keyboard.js";
import { clickHandling, errorCounter } from "./keyUp.js";
import { inputСharСolor } from './charColors.js'
import { netAverageSpeed } from "./speed.js";
import { upperCaseHandler, keySwapColor, swapSymbols } from "./KeyDown.js";
import { validation } from "./codeValidation.js";

document.getElementById('showGuide').addEventListener('click', () => {
  document.getElementById('headerGuide').style.display = 'block';
})

document.getElementById('closeGuide').addEventListener('click', () => {
  document.getElementById('headerGuide').style.display = 'none';
})

document.getElementById('closePanel').addEventListener('click', (e) => {
  document.getElementById('closePanel').style.display = 'none';

  document.getElementById('showBoardItems').style.visibility = 'visible';
  document.getElementById('showKeyboard').style.visibility = 'visible';

  sessionStorage.setItem('symbolIndex', 0);

  netAverageSpeed(0, true)
  errorCounter(0, true)

  generateKeyboard()

  getRandomText()

  upperCaseHandler(e)

  inputСharСolor(0);

  document.addEventListener('keyup', (e) => {
    const valid = validation(e.code)

    if (valid) {
      clickHandling(e.code)
    }

    keySwapColor(e, true)
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') swapSymbols(false);
  });

  document.addEventListener('keydown', (e) => {

    const valid = validation(e.code)

    if (valid) {
      upperCaseHandler(e)
    }

  });

  document.getElementById('errors').textContent = 0;
  document.getElementById('speed__min').textContent = 0;
  document.getElementById('time').textContent = 0;

})


// При нажатие на кнопку обновления сбрасывает все необходимые данные для работы с текстом

const restartText = document.getElementById('restartIcon');
restartText.addEventListener('click', (e) => {

  // Очищает поля для текста
  document.querySelector('.text-panel__board-main-text').innerHTML = '';
  // Скрывает поле с результатом
  document.getElementById('showResults').style.visibility = 'hidden';

  document.getElementById('errors').textContent = 0;
  document.getElementById('speed__min').textContent = 0;
  document.getElementById('time').textContent = 0;

  document.getElementById('parentKeyboardKeys').replaceChildren();

  sessionStorage.setItem('symbolIndex', 0);


  netAverageSpeed(0, true)
  errorCounter(0, true)

  generateKeyboard()

  getRandomText()

  upperCaseHandler(e)

  inputСharСolor(0);

});



window.onkeydown = function (e) {
  return !(e.keyCode == 32 || e.keyCode === 9 || e.keyCode === 18);
};
