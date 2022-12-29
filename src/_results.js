import { netAverageSpeed } from "./_speed.js";
import { selectedText } from "./_randomText.js";


export const results = (symbolIndex) => {
  const amountOfTime = netAverageSpeed()

  if (symbolIndex === selectedText.childNodes.length) {
    document.getElementById('showResults').style.visibility = 'visible';
    document.getElementById('speed').getElementsByTagName('span').item(0).innerHTML = `${Math.floor(
      (symbolIndex / amountOfTime) * 60,
    )
      }`;

    document.getElementById('speed__min').textContent = Math.floor(
      (symbolIndex / amountOfTime) * 60,
    );

  }
}
