
export const validation = (code) => {
  if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CapsLock' || code === 'Space' || code === 'Digit0' || code === 'Digit1' || code === 'Digit2' || code === 'Digit3' || code === 'Digit4' || code === 'Digit5' || code === 'Digit6' || code === 'Digit7' || code === 'Digit8' || code === 'Digit9' || code === 'KeyA' || code === 'KeyB' || code === 'KeyC' || code === 'KeyD' || code === 'KeyE' || code === 'KeyF' || code === 'KeyG' || code === 'KeyH' || code === 'KeyI' || code === 'KeyJ' || code === 'KeyK' || code === 'KeyL' || code === 'KeyM' || code === 'KeyN' || code === 'KeyO' || code === 'KeyP' || code === 'KeyS' || code === 'KeyR' || code === 'KeyT' || code === 'KeyQ' || code === 'KeyU' || code === 'KeyV' || code === 'KeyW' || code === 'KeyX' || code === 'KeyY' || code === 'KeyZ' || code === 'Comma' || code === 'Period' || code === 'Slash' || code === 'Semicolon' || code === 'Quote' || code === 'BracketLeft' || code === 'BracketRight' || code === 'Backquote' || code === 'Minus' || code === 'Equal' || code === 'Backslash') { return true } else { return false }
}

export const switchCaseValidation = (code) => {
  if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CapsLock') {
    return true
  } else {
    return false
  }
}
