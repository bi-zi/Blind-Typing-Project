import { selectedText } from "./texts.js";
import { setIntervalId } from "./keyUp.js";
import { results } from "./results.js";

export const inputСharСolor = (symbolIndex) => {
  if (symbolIndex < selectedText.childNodes.length) {
    selectedText.childNodes.item(symbolIndex).className = 'yellow__backgroud';
  } else if (symbolIndex >= selectedText.childNodes.length) {
    results(symbolIndex);
    clearInterval(setIntervalId);
  }

};
