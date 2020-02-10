// Keyboard
/** All keyboard keys and their respective pressed and released states. */
export type KeyName = 'ArrowLeft' | 'ArrowLeftPressed' | 'ArrowLeftReleased' | 'ArrowRight' | 'ArrowRightPressed' | 'ArrowRightReleased' | 'ArrowDown' | 'ArrowDownPressed' | 'ArrowDownReleased' | 'ArrowUp' | 'ArrowUpPressed' | 'ArrowUpReleased' | 'a' | 'aPressed' | 'aReleased' | 'b' | 'bPressed' | 'bReleased' | 'c' | 'cPressed' | 'cReleased' | 'd' | 'dPressed' | 'dReleased' | 'e' | 'ePressed' | 'eReleased' | 'f' | 'fPressed' | 'fReleased' | 'g' | 'gPressed' | 'gReleased' | 'h' | 'hPressed' | 'hReleased' | 'i' | 'iPressed' | 'iReleased' | 'j' | 'jPressed' | 'jReleased' | 'k' | 'kPressed' | 'kReleased' | 'l' | 'lPressed' | 'lReleased' | 'm' | 'mPressed' | 'mReleased' | 'n' | 'nPressed' | 'nReleased' | 'o' | 'oPressed' | 'oReleased' | 'p' | 'pPressed' | 'pReleased' | 'q' | 'qPressed' | 'qReleased' | 'r' | 'rPressed' | 'rReleased' | 's' | 'sPressed' | 'sReleased' | 't' | 'tPressed' | 'tReleased' | 'u' | 'uPressed' | 'uReleased' | 'v' | 'vPressed' | 'vReleased' | 'q' | 'qPressed' | 'qReleased' | 'r' | 'rPressed' | 'rReleased' | 's' | 'sPressed' | 'sReleased' | 't' | 'tPressed' | 'tReleased' | 'u' | 'uPressed' | 'uReleased' | 'v' | 'vPressed' | 'vReleased' | 'w' | 'wPressed' | 'wReleased' | 'x' | 'xPressed' | 'xReleased' | 'y' | 'yPressed' | 'yReleased' | 'z' | 'zPressed' | 'zReleased' | 'Digit1' | 'Digit1Pressed' | 'Digit1Released' | 'Digit2' | 'Digit2Pressed' | 'Digit2Released' | 'Digit3' | 'Digit3Pressed' | 'Digit3Released' | 'Digit4' | 'Digit4Pressed' | 'Digit4Released' | 'Digit5' | 'Digit5Pressed' | 'Digit5Released' | 'Digit6' | 'Digit6Pressed' | 'Digit6Released' | 'Digit7' | 'Digit7Pressed' | 'Digit7Released' | 'Digit8' | 'Digit8Pressed' | 'Digit8Released' | 'Digit9' | 'Digit9Pressed' | 'Digit9Released' | 'Digit0' | 'Digit0Pressed' | 'Digit0Released' | 'Shift' | 'ShiftPressed' | 'ShiftReleased' | 'Control' | 'ControlPressed' | 'ControlReleased' | 'Alt' | 'AltPressed' | 'AltReleased' | 'ShiftLeft' | 'ShiftLeftPressed' | 'ShiftLeftReleased' | 'ShiftRight' | 'ShiftRightPressed' | 'ShiftRightReleased' | 'AltLeft' | 'AltLeftPressed' | 'AltLeftReleased' | 'AltRight' | 'AltRightPressed' | 'AltRightReleased' | 'ControlLeft' | 'ControlLeftPressed' | 'ControlLeftReleased' | 'ControlRight' | 'ControlRightPressed' | 'ControlRightReleased' | 'Meta' | 'MetaPressed' | 'MetaReleased' | 'MetaLeft' | 'MetaLeftPressed' | 'MetaLeftReleased' | 'MetaRight' | 'MetaRightPressed' | 'MetaRightReleased' | 'Enter' | 'EnterPressed' | 'EnterReleased' | 'Tab' | 'TabPressed' | 'TabReleased' | 'CapsLock' | 'CapsLockPressed' | 'CapsLockReleased' | 'F1' | 'F1Pressed' | 'F1Released' | 'F2' | 'F2Pressed' | 'F2Released' | 'F3' | 'F3Pressed' | 'F3Released' | 'F4' | 'F4Pressed' | 'F4Released' | 'F5' | 'F5Pressed' | 'F5Released' | 'F6' | 'F6Pressed' | 'F6Released' | 'F7' | 'F7Pressed' | 'F7Released' | 'F8' | 'F8Pressed' | 'F8Released' | 'F9' | 'F9Pressed' | 'F9Released' | 'F10' | 'F10Pressed' | 'F10Released' | 'F11' | 'F11Pressed' | 'F11Released' | 'F12' | 'F12Pressed' | 'F12Released' | 'Space' | 'SpacePressed' | 'SpaceReleased' | 'Backquote' | 'BackquotePressed' | 'BackquoteReleased' | 'Minus' | 'MinusPressed' | 'MinusReleased' | 'Equal' | 'EqualPressed' | 'EqualReleased' | 'Backspace' | 'BackspacePressed' | 'BackspaceReleased' | 'BracketRight' | 'BracketRightPressed' | 'BracketRightReleased' | 'BracketLeft' | 'BracketLeftPressed' | 'BracketLeftReleased' | 'Backslash' | 'BackslashPressed' | 'BackslashReleased' | 'Semicolon' | 'SemicolonPressed' | 'SemicolonReleased' | 'Quote' | 'QuotePressed' | 'QuoteReleased' | 'Comma' | 'CommaPressed' | 'CommaReleased' | 'Period' | 'PeriodPressed' | 'PeriodReleased' | 'Slash' | 'SlashPressed' | 'SlashReleased' | 'Escape' | 'EscapePressed' | 'EscapeReleased' | 'Insert' | 'InsertPressed' | 'InsertReleased' | 'Delete' | 'DeletePressed' | 'DeleteReleased' | 'Home' | 'HomePressed' | 'HomeReleased' | 'End' | 'EndPressed' | 'EndReleased' | 'PageUp' | 'PageUpPressed' | 'PageUpReleased' | 'PageDown' | 'PageDownPressed' | 'PageDownReleased' | 'ContextMenu' | 'ContextMenuPressed' | 'ContextMenuReleased' | 'NumLock' | 'NumLockPressed' | 'NumLockReleased' | 'ScrollLock' | 'ScrollLockPressed' | 'ScrollLockReleased' | 'Numpad1' | 'Numpad1Pressed' | 'Numpad1Released' | 'Numpad2' | 'Numpad2Pressed' | 'Numpad2Released' | 'Numpad3' | 'Numpad3Pressed' | 'Numpad3Released' | 'Numpad4' | 'Numpad4Pressed' | 'Numpad4Released' | 'Numpad5' | 'Numpad5Pressed' | 'Numpad5Released' | 'Numpad6' | 'Numpad6Pressed' | 'Numpad6Released' | 'Numpad7' | 'Numpad7Pressed' | 'Numpad7Released' | 'Numpad9' | 'Numpad9Pressed' | 'Numpad9Released' | 'NumpadAdd' | 'NumpadAddPressed' | 'NumpadAddReleased' | 'NumpadSubtract' | 'NumpadSubtractPressed' | 'NumpadSubtractReleased' | 'NumpadMultiply' | 'NumpadMultiplyPressed' | 'NumpadMultiplyReleased' | 'NumpadDivide' | 'NumpadDividePressed' | 'NumpadDivideReleased' | 'NumpadDecimal' | 'NumpadDecimalPressed' | 'NumpadDecimalReleased' | 'NumpadComma' | 'NumpadCommaPressed' | 'NumpadCommaReleased';

/** Keyboard Input Data. */
const keyboard: { [Key in KeyName]: true|undefined; } & {
  /** Defaults to false, set this to true to allow holding a key to create multiple key-pressed events. */
  repeatKeys: boolean,
  /** Defaults to true, set to false to prevent some browser shortcuts like Ctrl+R, Ctrl+Shift+I, and a few more. */
  allowShortcuts: boolean,
  /** Raw string of what the user is typing on this frame. Ignores `repeatKeys` */
  string: string,
} = { repeatKeys: false, allowShortcuts: true } as any;
const toBeResetKeys = new Set<KeyName>();

const controlShortcuts = ['r', 'w', 'q', 'l', 't', 'k', 'd'];

export const BACKSPACE = '\b';

function createKeyHandler(state: true|undefined) {
  const stateWord = state ? 'Pressed' : 'Released';

  return (ev: KeyboardEvent) => {
    if(keyboard.allowShortcuts && ev.ctrlKey && ev.shiftKey && ev.key.toLowerCase() === 'i') return;
    if(keyboard.allowShortcuts && ev.ctrlKey && controlShortcuts.includes(ev.key.toLowerCase())) return;

    ev.preventDefault();

    if(state) {
      if(ev.key.length === 1) keyboard.string += ev.key;
      if(ev.key === 'Backspace') {
        if(keyboard.string.length) {
          keyboard.string = keyboard.string.substr(0, keyboard.string.length-1)
        } else {
          keyboard.string = BACKSPACE;
        }
      }
    }

    const name = (ev.code.startsWith('Key')) ? ev.code.slice(-1).toLowerCase() : ev.code;

    if(!keyboard.repeatKeys && keyboard[name as KeyName] == state) return;

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
/** All mouse buttons and their respective pressed and released states. */
export type MouseName = 'left' | 'right' | 'middle' | 'leftPressed' | 'rightPressed' | 'middlePressed' | 'leftReleased' | 'rightReleased' | 'middleReleased' | 'back' | 'backPressed' | 'backReleased' | 'forward' | 'forwardPressed' | 'forwardReleased';

const mapMouseButtonToName: { [button: number]: string; } = {
  0: 'left',
  2: 'right',
  1: 'middle',
  3: 'back',
  4: 'forward'
};

const mouse: {
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

// Gamepads
// type GamepadButtonName = 'a' | 'b' | 'x' | 'y' | 'lb' | 'rb' | 'lt' | 'rt' | 'back' | 'start' | 'lstick' | 'rstick' | 'up' | 'down' | 'left' | 'right' | 'meta' | 'aPressed' | 'bPressed' | 'xPressed' | 'yPressed' | 'lbPressed' | 'rbPressed' | 'ltPressed' | 'rtPressed' | 'backPressed' | 'startPressed' | 'lstickPressed' | 'rstickPressed' | 'upPressed' | 'downPressed' | 'leftPressed' | 'rightPressed' | 'metaPressed' | 'aReleased' | 'bReleased' | 'xReleased' | 'yReleased' | 'lbReleased' | 'rbReleased' | 'ltReleased' | 'rtReleased' | 'backReleased' | 'startReleased' | 'lstickReleased' | 'rstickReleased' | 'upReleased' | 'downReleased' | 'leftReleased' | 'rightReleased' | 'metaReleased';
// const buttonRemap = ['a', 'b', 'x', 'y', 'lb', 'rb', 'lt', 'rt', 'back', 'start', 'lstick', 'rstick', 'up', 'down', 'left', 'right', 'meta'];

// /** Gamepad Data */
// interface EasyGamepad {
//   buttons: {[K in GamepadButtonName]: true|undefined}
//   raw: Gamepad
// }
// const gamepad: EasyGamepad[] = [];

// export { gamepad };
// }

// Reset
/** Call this at the end of every frame. This handles updating pressed and released states of all buttons. */
export function inputManagerEndFrame() {
  toBeResetKeys.forEach(key => delete keyboard[key]);
  toBeResetKeys.clear();
  toBeResetMouse.forEach(button => delete mouse[button]);
  toBeResetMouse.clear();
  mouse.scrollX = 0;
  mouse.scrollY = 0;
  keyboard.string = '';
}

function reset() {
  Object.keys(keyboard).map(key => {
    if(key !== 'repeatKeys' && key !== 'allowShortcuts') {delete keyboard[key as KeyName];}
  });
  Object.keys(mouse).map(button => {
    if(button !== 'x' && button !== 'y') {delete mouse[button as MouseName];}
  });
  keyboard.string = '';
}

window.addEventListener('blur', reset);

reset();
