import { getRandomText, selectedText } from "./texts.js";
import { generateKeyboard } from "./keyboard.js";
import { clickHandling } from "./keyUp.js";
import { inputСharСolor } from './charColors.js'
import { upperCaseHandler, keySwapColor, swapSymbols } from "./KeyDown.js";






document.getElementById('showGuide').addEventListener('click', () => {
  document.getElementById('headerGuide').style.display = 'block';
})

document.getElementById('closeGuide').addEventListener('click', () => {
  document.getElementById('headerGuide').style.display = 'none';
})

document.getElementById('closePanel').addEventListener('click', () => {
  document.getElementById('closePanel').style.display = 'none';

  document.getElementById('showBoardItems').style.visibility = 'visible';
  document.getElementById('showKeyboard').style.visibility = 'visible';

  generateKeyboard()

  getRandomText()

  inputСharСolor(0);

  document.addEventListener('keyup', (e) => {
    clickHandling(e.code)

    keySwapColor(e, true)
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') swapSymbols(false);
  });

  document.addEventListener('keydown', (e) => {
    upperCaseHandler(e)
  });

})




// Выключает взаимодействие клавиши Tab и Space с интерфейсом
window.onkeydown = function (e) {
  return !(e.keyCode == 32 || e.keyCode === 9);
};
