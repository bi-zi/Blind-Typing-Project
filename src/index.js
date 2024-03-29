import { getRandomText } from "./randomText.js";
import { generateKeyboard } from "./keyboard.js";
import { clickHandling, errorCounter } from "./keyUp.js";
import { inputСharСolor, keySwapColor } from './charColors.js'
import { netAverageSpeed } from "./speed.js";
import { capsHandler } from "./keyDown.js";
import { validation, switchCaseValidation } from "./codeValidation.js";

document.getElementById('showGuide').addEventListener('click', () => {
  document.getElementById('headerGuide').style.display = 'block';
})

document.getElementById('closeGuide').addEventListener('click', () => {
  document.getElementById('headerGuide').style.display = 'none';
})

sessionStorage.setItem('symbolIndex', 0);
sessionStorage.setItem('intervalId', true)

document.getElementById('closePanel').addEventListener('click', (e) => {
  document.getElementById('closePanel').style.display = 'none';

  // document.getElementById('textPanelInput').style.display = 'block'
  document.getElementById('textPanelInput').focus()

  document.getElementById('errors').textContent = 0;
  document.getElementById('speed__min').textContent = 0;
  document.getElementById('time').textContent = 0;

  document.getElementById('showBoardItems').style.visibility = 'visible';
  document.getElementById('showKeyboard').style.visibility = 'visible';


  clearInterval(sessionStorage.intervalId)
  netAverageSpeed(0, true, false)

  errorCounter(0, true)

  generateKeyboard()

  getRandomText()

  const systemCaps = e.getModifierState('CapsLock')
  systemCaps ? capsHandler(e, systemCaps, true) : null

  inputСharСolor(0);


  document.addEventListener('keydown', (e) => {
    const valid = validation(e.code)
    const caseValidation = switchCaseValidation(e.code)

    const systemCaps = e.getModifierState('CapsLock')

    if (caseValidation) {
      capsHandler(e, systemCaps)
    }



    keySwapColor(e)

  });


  document.addEventListener('keyup', (e) => {
    const valid = validation(e.code)
    const caseValidation = switchCaseValidation(e.code)


    if (valid) {
      clickHandling(e.code)
    }


    const systemCaps = e.getModifierState('CapsLock')

    if (caseValidation) {
      capsHandler(e, systemCaps)
    }

    keySwapColor(e)

  });
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

  clearInterval(sessionStorage.intervalId)

  sessionStorage.setItem('symbolIndex', 0);
  sessionStorage.setItem('intervalId', true)

  netAverageSpeed(0, true, false)
  errorCounter(0, true)

  generateKeyboard()

  getRandomText()

  const systemCaps = e.getModifierState('CapsLock')
  systemCaps ? capsHandler(e, systemCaps, true) : null

  inputСharСolor(0);

});

window.onkeydown = function (e) {
  return !(e.keyCode === 9 || e.keyCode === 18);
};
