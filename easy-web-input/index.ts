// Keyboard
export type KeyName = 'ArrowLeft' | 'ArrowLeftPressed' | 'ArrowLeftReleased' | 'ArrowRight' | 'ArrowRightPressed' | 'ArrowRightReleased' | 'ArrowDown' | 'ArrowDownPressed' | 'ArrowDownReleased' | 'ArrowUp' | 'ArrowUpPressed' | 'ArrowUpReleased' | 'a' | 'aPressed' | 'aReleased' | 'b' | 'bPressed' | 'bReleased' | 'c' | 'cPressed' | 'cReleased' | 'd' | 'dPressed' | 'dReleased' | 'e' | 'ePressed' | 'eReleased' | 'f' | 'fPressed' | 'fReleased' | 'g' | 'gPressed' | 'gReleased' | 'h' | 'hPressed' | 'hReleased' | 'i' | 'iPressed' | 'iReleased' | 'j' | 'jPressed' | 'jReleased' | 'k' | 'kPressed' | 'kReleased' | 'l' | 'lPressed' | 'lReleased' | 'm' | 'mPressed' | 'mReleased' | 'n' | 'nPressed' | 'nReleased' | 'o' | 'oPressed' | 'oReleased' | 'p' | 'pPressed' | 'pReleased' | 'q' | 'qPressed' | 'qReleased' | 'r' | 'rPressed' | 'rReleased' | 's' | 'sPressed' | 'sReleased' | 't' | 'tPressed' | 'tReleased' | 'u' | 'uPressed' | 'uReleased' | 'v' | 'vPressed' | 'vReleased' | 'q' | 'qPressed' | 'qReleased' | 'r' | 'rPressed' | 'rReleased' | 's' | 'sPressed' | 'sReleased' | 't' | 'tPressed' | 'tReleased' | 'u' | 'uPressed' | 'uReleased' | 'v' | 'vPressed' | 'vReleased' | 'w' | 'wPressed' | 'wReleased' | 'x' | 'xPressed' | 'xReleased' | 'y' | 'yPressed' | 'yReleased' | 'z' | 'zPressed' | 'zReleased' | 'Digit1' | 'Digit1Pressed' | 'Digit1Released' | 'Digit2' | 'Digit2Pressed' | 'Digit2Released' | 'Digit3' | 'Digit3Pressed' | 'Digit3Released' | 'Digit4' | 'Digit4Pressed' | 'Digit4Released' | 'Digit5' | 'Digit5Pressed' | 'Digit5Released' | 'Digit6' | 'Digit6Pressed' | 'Digit6Released' | 'Digit7' | 'Digit7Pressed' | 'Digit7Released' | 'Digit8' | 'Digit8Pressed' | 'Digit8Released' | 'Digit9' | 'Digit9Pressed' | 'Digit9Released' | 'Digit0' | 'Digit0Pressed' | 'Digit0Released' | 'Shift' | 'ShiftPressed' | 'ShiftReleased' | 'Control' | 'ControlPressed' | 'ControlReleased' | 'Alt' | 'AltPressed' | 'AltReleased' | 'ShiftLeft' | 'ShiftLeftPressed' | 'ShiftLeftReleased' | 'ShiftRight' | 'ShiftRightPressed' | 'ShiftRightReleased' | 'AltLeft' | 'AltLeftPressed' | 'AltLeftReleased' | 'AltRight' | 'AltRightPressed' | 'AltRightReleased' | 'ControlLeft' | 'ControlLeftPressed' | 'ControlLeftReleased' | 'ControlRight' | 'ControlRightPressed' | 'ControlRightReleased' | 'Meta' | 'MetaPressed' | 'MetaReleased' | 'MetaLeft' | 'MetaLeftPressed' | 'MetaLeftReleased' | 'MetaRight' | 'MetaRightPressed' | 'MetaRightReleased' | 'Enter' | 'EnterPressed' | 'EnterReleased' | 'Tab' | 'TabPressed' | 'TabReleased' | 'CapsLock' | 'CapsLockPressed' | 'CapsLockReleased' | 'F1' | 'F1Pressed' | 'F1Released' | 'F2' | 'F2Pressed' | 'F2Released' | 'F3' | 'F3Pressed' | 'F3Released' | 'F4' | 'F4Pressed' | 'F4Released' | 'F5' | 'F5Pressed' | 'F5Released' | 'F6' | 'F6Pressed' | 'F6Released' | 'F7' | 'F7Pressed' | 'F7Released' | 'F8' | 'F8Pressed' | 'F8Released' | 'F9' | 'F9Pressed' | 'F9Released' | 'F10' | 'F10Pressed' | 'F10Released' | 'F11' | 'F11Pressed' | 'F11Released' | 'F12' | 'F12Pressed' | 'F12Released' | 'Space' | 'SpacePressed' | 'SpaceReleased' | 'Backquote' | 'BackquotePressed' | 'BackquoteReleased' | 'Minus' | 'MinusPressed' | 'MinusReleased' | 'Equal' | 'EqualPressed' | 'EqualReleased' | 'Backspace' | 'BackspacePressed' | 'BackspaceReleased' | 'BracketRight' | 'BracketRightPressed' | 'BracketRightReleased' | 'BracketLeft' | 'BracketLeftPressed' | 'BracketLeftReleased' | 'Backslash' | 'BackslashPressed' | 'BackslashReleased' | 'Semicolon' | 'SemicolonPressed' | 'SemicolonReleased' | 'Quote' | 'QuotePressed' | 'QuoteReleased' | 'Comma' | 'CommaPressed' | 'CommaReleased' | 'Period' | 'PeriodPressed' | 'PeriodReleased' | 'Slash' | 'SlashPressed' | 'SlashReleased' | 'Escape' | 'EscapePressed' | 'EscapeReleased' | 'Insert' | 'InsertPressed' | 'InsertReleased' | 'Delete' | 'DeletePressed' | 'DeleteReleased' | 'Home' | 'HomePressed' | 'HomeReleased' | 'End' | 'EndPressed' | 'EndReleased' | 'PageUp' | 'PageUpPressed' | 'PageUpReleased' | 'PageDown' | 'PageDownPressed' | 'PageDownReleased' | 'ContextMenu' | 'ContextMenuPressed' | 'ContextMenuReleased' | 'NumLock' | 'NumLockPressed' | 'NumLockReleased' | 'ScrollLock' | 'ScrollLockPressed' | 'ScrollLockReleased' | 'Numpad1' | 'Numpad1Pressed' | 'Numpad1Released' | 'Numpad2' | 'Numpad2Pressed' | 'Numpad2Released' | 'Numpad3' | 'Numpad3Pressed' | 'Numpad3Released' | 'Numpad4' | 'Numpad4Pressed' | 'Numpad4Released' | 'Numpad5' | 'Numpad5Pressed' | 'Numpad5Released' | 'Numpad6' | 'Numpad6Pressed' | 'Numpad6Released' | 'Numpad7' | 'Numpad7Pressed' | 'Numpad7Released' | 'Numpad9' | 'Numpad9Pressed' | 'Numpad9Released' | 'NumpadAdd' | 'NumpadAddPressed' | 'NumpadAddReleased' | 'NumpadSubtract' | 'NumpadSubtractPressed' | 'NumpadSubtractReleased' | 'NumpadMultiply' | 'NumpadMultiplyPressed' | 'NumpadMultiplyReleased' | 'NumpadDivide' | 'NumpadDividePressed' | 'NumpadDivideReleased' | 'NumpadDecimal' | 'NumpadDecimalPressed' | 'NumpadDecimalReleased' | 'NumpadComma' | 'NumpadCommaPressed' | 'NumpadCommaReleased';

let keyboard: { [Key in KeyName]: true|undefined; } = {} as any;
const toBeResetKeys = new Set<KeyName>();

function createKeyHandler(state: true|undefined) {
  const stateWord = state ? 'Pressed' : 'Released';

  return (ev: KeyboardEvent) => {
    if(ev.ctrlKey && ev.shiftKey && ev.key.toLowerCase() === 'i') return;
    if(ev.ctrlKey && ev.key.toLowerCase() === 'r') return;

    ev.preventDefault();

    const name = (ev.code.startsWith('Key')) ? ev.code.slice(-1).toLowerCase() : ev.code;

    keyboard[name as KeyName] = state;
    keyboard[name + stateWord as KeyName] = state;
    toBeResetKeys.add(name + stateWord as KeyName);
    if (ev.key.length > 1 && ev.code.startsWith(ev.key)) {
      keyboard[ev.key as KeyName] = state;
      keyboard[ev.key + stateWord as KeyName] = state;
      toBeResetKeys.add(ev.key + stateWord as KeyName);
    }
  }
}

window.addEventListener('keydown', createKeyHandler(true));
window.addEventListener('keyup', createKeyHandler(undefined));

export { keyboard };

// Mouse
export type MouseName = 'left' | 'right' | 'middle' | 'leftPressed' | 'rightPressed' | 'middlePressed' | 'leftReleased' | 'rightReleased' | 'middleReleased' | 'back' | 'backPressed' | 'backReleased' | 'forward' | 'forwardPressed' | 'forwardReleased';

const mapMouseButtonToName: { [button: number]: string; } = {
  0: 'left',
  2: 'right',
  1: 'middle',
  3: 'back',
  4: 'forward'
};

let mouse: {
  [Button in MouseName]: true|undefined;
} & {
  x: number;
  y: number;
  scrollX: number;
  scrollY: number;
} = {x:0,y:0} as any;

const toBeResetMouse = new Set<MouseName>();

window.addEventListener('mousemove', (ev) => {
  mouse.x = ev.x;
  mouse.y = ev.y;
});
function createMouseHandler(state: true|undefined) {
  const stateWord = state ? 'Pressed' : 'Released';

  return (ev: MouseEvent) => {
    const name = mapMouseButtonToName[ev.button];
    if (!name) return;
    mouse[name as MouseName] = state;
    mouse[name + stateWord as MouseName] = true;
    toBeResetMouse.add(name + stateWord as MouseName);
  }
}

// We want to normalize everything to "1 unit per scroll action", as defined
// by my mouse, which seems to be 3 lines on FireFox, and 53 pixels on Chrome.
const mouseWheelDeltaMultipliers: { [mode: number]: number; } = {
  0: 1 / 53,
  1: 17.666 / 53,
  2: 800 / 53,
};

window.addEventListener('mousedown', createMouseHandler(true));
window.addEventListener('mouseup', createMouseHandler(undefined));
window.addEventListener('wheel', (ev) => {
  ev.preventDefault();

  const multiplier = mouseWheelDeltaMultipliers[ev.deltaMode];

  mouse.scrollX += ev.deltaX * multiplier;
  mouse.scrollY += ev.deltaY * multiplier;
}, { passive: false });
window.addEventListener('contextmenu', (ev) => ev.preventDefault());

export { mouse };

// Reset
export function updateInputManager() {
  toBeResetKeys.forEach(key => keyboard[key] = undefined);
  toBeResetKeys.clear();
  toBeResetMouse.forEach(button => mouse[button] = undefined);
  toBeResetMouse.clear();
  mouse.scrollX = 0;
  mouse.scrollY = 0;
}

function reset() {
  keyboard = {} as any;
  mouse = { x: mouse.x, y: mouse.y, scrollX: 0, scrollY: 0 } as any;
}

window.addEventListener('blur', reset);

reset();
