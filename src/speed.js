
let sumTime = 0
let timeHasGone = 0
let amountOfTime = 0

export const netAverageSpeed = (symbolIndex) => {

  if (!timeHasGone) timeHasGone = new Date().getTime();

  else {
    let timeStopped = new Date().getTime();

    sumTime = String(timeStopped - timeHasGone);
    amountOfTime = String(timeStopped - timeHasGone);
    if (sumTime.length < 3) {
      amountOfTime = '0.0' + amountOfTime;
    }
    if (sumTime.length === 3) {
      amountOfTime = '0.' + amountOfTime;
    }
    if (sumTime.length === 4) {
      amountOfTime = amountOfTime.split('').map((x, i) => i === 0 ? x + '.' : x).join('')
    }
    if (sumTime.length === 5) {
      amountOfTime = amountOfTime.split('').map((x, i) => i === 1 ? x + '.' : x).join('')
    }
    if (sumTime.length === 6) {
      amountOfTime = amountOfTime.split('').map((x, i) => i === 2 ? x + '.' : x).join('')
    }
  }

  if (amountOfTime === 0) return
  document.getElementById('speed__min').textContent = Math.floor((symbolIndex / amountOfTime) * 60);
  document.getElementById('time').textContent = amountOfTime

  return amountOfTime
}
