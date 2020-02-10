import { inputManagerEndFrame, keyboard, mouse, BACKSPACE } from '../src';

const elem = document.getElementById('result');

let sx = 0;
let sy = 0;

let text = '';

function bool(x) { return x || false }

function frame() {
  sx += mouse.scrollX || 0;
  sy += mouse.scrollY || 0;

  if(keyboard.string === BACKSPACE) {
    text = text.substr(0, text.length - 1);
  } else {
    text += keyboard.string;
  }

  elem.innerText = `Keyboard:
  
  A Held Down: ${bool(keyboard.a)}
  A Pressed: ${bool(keyboard.aPressed)}
  A Released: ${bool(keyboard.aReleased)}

  Control Pressed

  Mouse:

  Position: ${mouse.x}, ${mouse.y}
  Scroll: ${sx}, ${sy}
  Left: ${bool(mouse.left)}
  Middle: ${bool(mouse.middle)}
  Right: ${bool(mouse.right)}

  Keyboard Text Buffer: ${text}
`;

  inputManagerEndFrame();
  requestAnimationFrame(frame)
}

requestAnimationFrame(frame)
