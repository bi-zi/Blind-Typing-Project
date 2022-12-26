import { getRandomText } from "./texts";

// При нажатие на кнопку обновления сбрасывает все необходимые данные для работы с текстом
const restartText = document.getElementById('restartIcon');
restartText.addEventListener('click', () => {
  // Очищает поля для текста
  document.querySelector('.text-panel__board-main-text').innerHTML = '';
  // Скрывает поле с результатом
  document.getElementById('showResults').style.visibility = 'hidden';


  document.getElementById('errors').textContent = 0;
  document.getElementById('speed__min').textContent = 0;
  document.getElementById('time').textContent = 0;

  symbolIndex = 0;
  sumErrors = 0;
  sumTime = 0;
  timeHasGone = 0;
  amountOfTime = 0;

  getRandomText();

});
