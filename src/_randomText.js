import { texts } from "./_texts.js";


export const getRandomText = () => {
 const minimum = 0;
 const maximum = Math.floor(texts.length - 1);

 const randomText = texts[Math.floor(Math.random() * (maximum - minimum)) + minimum].split('')

 document.getElementById('textLength').textContent = randomText.length

 randomText.forEach((x) =>
 selectedText.insertAdjacentHTML('beforeend', `<span class="whiteTxt">${x}</span>`),
 );
}

export const selectedText = document.querySelector('.text-panel__board-main-text');
