
// Массив всех текстов
let textStock = [
  'Для современного мира выбранный нами инновационный путь однозначно определяет каждого участника как способного принимать собственные решения касаемо приоритизации разума над эмоциями. Противоположная точка зрения подразумевает, что независимые государства будут представлены в исключительно положительном свете.',
  'С улыбкой, потому что муж - каменная стена. А изнутри еще и с подогревом. Стена окружает ее кольцом. Ей так удобно засыпать у него на плече, вдыхая запах его волос и кожи, чувствуя тепло его большого сильного тела. Она не допускает и мысли о том, что с ним что-нибудь может случиться.',
  'Бросок, оглушительный взрыв, и щита больше не существовало. Обгоревшие тела трех ситов валялись рядом с разбитым генератором поля. Я вложил в кобуру пистолет и, выйдя в другую комнату, вызвал охрану. Взвод бойцов прибыл секунд через двадцать.',
  'Вокруг нас простиралось бесконечное степное море. Трава, мелкие синие цветочки, чахлые кустики. Воздух тихо звенел - какие-то насекомые устроили вечерний концерт. Из-под ног иногда вспархивали птицы. Настоящий рай для энтомологов и орнитологов, желающих изучить степь в ее первозданном виде.',
  'Лориклаксоз, громко топая сапогами, убрался вон, а Гриша кинулся к блюду. Не сказать, чтобы он был силен в иностранных языках, но отдельные слова разобрать мог. Вот если бы они еще были напечатаны... Насладившись звуками знакомой, но малопонятной речи, Гриша принялся барабанить по блюду на все лады.',
  'Ворона хотела сделать еще один заход, но мужчина уже ушел слишком далеко. Оно и понятно, ему было не до ворон. Он торопился к своей возлюбленной. Торопился, потому что знал, она ждет его. И обязательно захочет его поцеловать, едва он переступит порог ее небольшой, но такой уютной квартирки.',
  'Сергей прислушался - из детской комнаты доносились смех и веселая возня. "Маша... Ма-аша! Я же сказала - не трожь. Не трожь, говорю!" - Голос старшенькой, Саши, был требовательно-назидательным. Раздался звучный шлепок и тут же обиженный рев младшенькой Маши.',
  'После долгого и бесплодного ожидания я решил написать тебе сам, и ради тебя, и ради меня: не хочу вспоминать, что за два долгих года, проведенных в заключении, я не получил от тебя ни одной строчки, до меня не доходили ни послания, ни вести о тебе, кроме тех, что причиняли мне боль.',
  'Брат сыграет роль наживки, он выбежит из леса, словно волк на охотника. Колл Омсворд во власти злых чар, он раб темной силы, из ее магической ткани соткан его плащ. Беглец похитил плащ, закутавшись в него, чтобы остаться неузнанным, но именно этого и добивался Риммер Дэлл.',
  'Фотомонтаж из нескольких снимков тоже был выполнен на уровне - скупо, но эффектно, ничего не выпячивается, но все как на ладони. Пять Манхаринов, застывших тесным кольцом, чуть ли не спина к спине, и пять механических монстров вокруг.',
  'Пуго ответил не сразу - Гик, конечно, свой в доску, но язык при нем распускать не стоит. Да и было бы из-за чего - да, постоялец мрачноватый, но человек проверенный, и пакостей от него пока не было. Частенько здесь останавливается, да и друзья его тоже нередко заглядывают',
  'Лететь им предстояло на древнем спин-звездолете "Олег", ржавом корыте без искусственной гравитации, иллюминаторов и прогулочных палуб. Чтобы удержать пассажиров в гамаках и на фуга-ложах, фантопликаторы подключили прямо к информационной сети.',
];

// Глобальные переменные
let mainTxt = document.querySelector('.mainTxt');
let randomText = textStock[getRandomInt(0, textStock.length - 1)].split('');
let symbolIndex = 0;
let sumErrors = 0;
let timeHasGone = 0;
let sumTime = 0;
let amountOfTime = 0;

// Имитация регистрации не добавляет функционала для пользователя\
let regForm = document.querySelector('.regform');
let users = { name: '', password: '' };
regForm.onsubmit = function (evt) {
  evt.preventDefault();
  users.name = document.getElementById('nickName').value;
  users.password = document.getElementById('password').value;
  document.getElementById('nickName').value = '';
  document.getElementById('password').value = '';
};

let entranceForm = document.querySelector('.entranceForm');
  entranceForm.onsubmit = function (evt) {
  evt.preventDefault();
  if (
    users.name === document.getElementById('checkNickName').value &&
    users.password === document.getElementById('checkPassword').value
  ) {
    document.getElementById('closeIt').style.visibility = 'hidden';
  }
  if (document.getElementById('closeIt').style.visibility === 'hidden') {
    document.getElementById('userInfo').style.visibility = 'visible';
    document.getElementById('userName').innerHTML = users.name;
  }
};

// Функия отправляет рандомное число от 0 до числа последнего текста
function getRandomInt(min, max) {
  let minimum = Math.ceil(min);
  let maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum; //Максимум не включается, минимум включается
}

// Передает нужные данные для работы с клавиатурой и текстом при запуске (начать печатать)
const newText = document.querySelector('.start__typing');
newText.addEventListener('click', () => {
  // Вывод текста посимвольно на табло
  randomText.forEach((x) =>
    mainTxt.insertAdjacentHTML('beforeend', `<span class="whiteTxt">${x}</span>`),
  );

  // Отправляет данные для работы кода
  document.addEventListener('keyup', function (event) {
    clickHandling(event.code);
    timeBetweenClicks(event.code);
  });
});

// Функция отображает клавиатуру и элемнты табло с текстом после нажатия кнопки (начать печатать)
const showhide = (showBoardItems) => {
  let BoardItems = document.getElementById(showBoardItems);
  BoardItems.style.visibility = BoardItems.style.visibility == 'hidden' ? 'visible' : 'hidden';
  document.getElementById('showKeyboard').style.visibility = 'visible';
  inputСharСolor();
};

// Показ/скрытие клавиатуры при клике на иконку
const hideKeyborad = document.querySelector('.keyboard__icon');
hideKeyborad.addEventListener('click', () => {
  let closeKeyboard = document.getElementById('showKeyboard');
  closeKeyboard.style.visibility = closeKeyboard.style.visibility == 'hidden' ? 'visible' : 'hidden';
});

// При нажатие на кнопку обновления сбрасывает все необходимые данные для работы с текстом
const restartText = document.querySelector('.restart__icon');
restartText.addEventListener('click', () => {
  // Очищает поля для текста
  document.querySelector('.mainTxt').innerHTML = '';
  // Скрывает поле с результатом
  document.getElementById('showResults').style.visibility = 'hidden';
  // выбирает рандомный текст
  randomText = textStock[getRandomInt(0, textStock.length - 1)].split('');

  // Посимвольно вставляет текст в HTML по классу "mainTxt"
  randomText.forEach((x) =>
    mainTxt.insertAdjacentHTML('beforeend', `<span class="whiteTxt">${x}</span>`),
  );

  symbolIndex = 0;
  sumErrors = 0;
  document.getElementById('errors').textContent = 0;

  sumTime = 0;
  timeHasGone = 0;

  amountOfTime = 0;
  document.getElementById('speed__min').textContent = 0;
});

// Обработка нажимаемых клавиш и обработка ошибок
const clickHandling = (smallKeys) => {
  // классу "mainTxt" находит символ или букву по индексу
  let textSymbol = mainTxt.childNodes[symbolIndex].textContent;
  inputСharСolor(symbolIndex);

  // Если шифт или капс зачат(true) классу "Keyboard" добавляется класс "keyboardStyle" это изменяет вводимые буквы на большие и заменяет символы
  document.querySelector('.text__transform') ? (keyboardStyle = true) : (keyboardStyle = false);

  // Обрабатывает символы и присваивает новый класс правильный символ = зеленый фон, неправильный красный и отсылает символ индекс чтобы можно было менять цвет для следующего символа на желтый
  if (
    smallKeys != 'ShiftLeft' &&
    smallKeys != 'Space' &&
    smallKeys != 'CapsLock' &&
    smallKeys != 'Tab' &&
    smallKeys != 'Enter' &&
    smallKeys !== 'ShiftRight' &&
    smallKeys != 'Backspace'
  ) {
    let charFromKeyboard = document
      .getElementById(smallKeys)
      .getElementsByTagName('span')
      .item(1).textContent;
    if (textSymbol === charFromKeyboard && keyboardStyle === false) {
      mainTxt.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
    }
    if (textSymbol === charFromKeyboard.toUpperCase() && keyboardStyle === true) {
      mainTxt.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
    } else if (
      textSymbol != charFromKeyboard ||
      (keyboardStyle === true && textSymbol != charFromKeyboard.toUpperCase())
    ) {
      mainTxt.childNodes[symbolIndex].className = 'red__backgroud';
      errorCounter(1);
    }
  } else if (smallKeys === 'Space' && textSymbol === ' ') {
    let bigCharFromKeyboard = document
      .getElementById(smallKeys)
      .getElementsByTagName('span')
      .item(1).textContent;
    if ((textSymbol === bigCharFromKeyboard && keyboardStyle === false) || keyboardStyle === true) {
      mainTxt.childNodes[symbolIndex++].className = 'green__backgroud';
      inputСharСolor(symbolIndex);
    }
  }
};

// Функция подсвечивает следующий символ желтым
const inputСharСolor = (symbolIndex) => {
  if (symbolIndex < mainTxt.childNodes.length) {
    mainTxt.childNodes.item(symbolIndex).className = 'yellow__backgroud';
  }
  endOfText(symbolIndex);
};

// Функция показывает сумму ошибок
const errorCounter = (err) => {
  sumErrors += err;
  document.getElementById('errors').textContent = sumErrors;
  document.getElementById('mistake').getElementsByTagName('span').item(0).innerHTML = `${sumErrors}`;
};

// Функция показывает среднюю скорость котороя обновляется при клике
const netAverageSpeed = (timeBetween) => {
  amountOfTime += timeBetween;
  document.getElementById('speed__min').textContent = Math.floor(
    (symbolIndex / amountOfTime.toFixed(2)) * 60,
  );
};

// Обработчик KEYDOWN
document.addEventListener('keydown', (event) => {
  if (!event.repeat) {
    backLight(event);
  }
  if (
    event.code === 'CapsLock' &&
    document.getElementById('one').getElementsByTagName('span').item(0).innerHTML === '!'
  ) {
    document.getElementById('showKeyboard').classList.toggle('text__transform');
    swapSymbol(false);
  } else if (
    event.code === 'CapsLock' &&
    document.getElementById('one').getElementsByTagName('span').item(0).innerHTML === '1'
  ) {
    document.getElementById('showKeyboard').classList.toggle('text__transform');
    swapSymbol(true);
  }
});

// Обработчик KEYUP
document.addEventListener('keyup', (event) => {
  backLight(event);
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') swapSymbol(false);
});

// Подсветка клавиш при клике
function backLight(event) {
  for (let key of document.querySelectorAll('.row i')) {
    if (key.id === event.code) {
      key.getElementsByTagName('div').item(0).classList.toggle('smallKeysSwapColor');
    }
    if (key.id === event.code && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
      document.getElementById('showKeyboard').classList.toggle('text__transform');

      swapSymbol(true);
    }
  }
}

// Функция заменяет символы на клавиатуре при нажатии шифта или капса
function swapSymbol(checkShift) {
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
      (document.getElementById(x).getElementsByTagName('span').item(1).textContent = `${
        checkShift ? secondTypeOfKeys[i++] : firstTypeOfKeys[i++]
      }`),
  );
}

// Функция считает время между прошлым кликом и настоящим кликом в миллисекундах после добавляет нули если нужно. К примеру если время между кликами 16 мсек, к отправляемому премени добавляется 0.0 итог (0.016) чтобы максимально точно считать время
function timeBetweenClicks(smallKeys) {
  if (
    smallKeys != 'ShiftLeft' &&
    smallKeys !== 'ShiftRight' &&
    smallKeys != 'CapsLock' &&
    smallKeys != 'Tab' &&
    smallKeys != 'Enter' &&
    smallKeys != 'Backspace'
  ) {
    if (!timeHasGone) timeHasGone = new Date().getTime();
    else {
      let timeStopped = new Date().getTime();

      sumTime = String(timeStopped - timeHasGone);
      if (sumTime.length < 2) {
        sumTime1 = '0.00' + sumTime;
        netAverageSpeed(+sumTime1);
      }
      if (sumTime.length === 2) {
        sumTime2 = '0.0' + sumTime;
        netAverageSpeed(+sumTime2);
      }
      if (sumTime.length === 3) {
        sumTime3 = '0.' + sumTime;
        netAverageSpeed(+sumTime3);
      }
      if (sumTime.length === 4) {
        sumTime4 = sumTime.split('');
        firstELemet = sumTime4.shift();
        sumTime4.unshift(firstELemet, '.');
        netAverageSpeed(+sumTime4.join(''));
      }
      if (sumTime.length === 5) {
        sumTime5 = sumTime.split('');
        firstELemet2 = sumTime5.shift();
        SecondELemet = sumTime5.shift();
        sumTime5.unshift(firstELemet2, SecondELemet, '.');
        netAverageSpeed(+sumTime5.join(''));
      }
      timeHasGone = timeStopped;
    }
  }
}

// Вывод таблички с результатом
function endOfText(symbolIndex) {
  if (symbolIndex === mainTxt.childNodes.length) {
    document.getElementById('showResults').style.visibility = 'visible';
    document.getElementById('speed').getElementsByTagName('span').item(0).innerHTML = `${
      Math.floor(symbolIndex / amountOfTime.toFixed(2)) * 60
    }`;
  }
}

// Выключает взаимодействие клавиши Tab и Space с интерфейсом
window.onkeydown = function (e) {
  return !(e.keyCode == 32 || e.keyCode === 9);
};
