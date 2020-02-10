# Easy Keyboard and Mouse Input
When creating web-based video games, getting keyboard input is not the most trivial task. This package simplifies getting keyboard and mouse input with nice abstractions.

1.5k minified

```
npm install easy-web-input
```

```js
import {
  keyboard,
  mouse,
  inputManagerEndFrame
} from 'easy-input';

// inside of your update logic, you can query any keyboard button by name
if(keyboard.d) {
  // im holding down the d button
}
if(keyboard.dPressed) {
  // one frame that d is being pressed.
}

if(mouse.left) {
  // my left mouse is down
}


// at the end of every frame of your game logic, call the update function
inputManagerEndFrame();
```

```js
// if not using a module bundler, it is available as the Input global

if (Input.keyboard.dPressed) {

}

Input.inputManagerEndFrame();
```

## Keyboard API
What button they are should be self explanatory. Two things should be noted: some symbols aren't present because they are modifiers of others (the "greater than" is represented as "comma"), and that you can add "Pressed" or "Released" to any key to get one-frame pulses on their respective events.

There are also three other properties on `keyboard`:
- string: what a user typed during that frame. Use for virtual text fields.
- repeatKeys: defaults to false, set to true to allow holding a key to output multiple pressed events
- allowShortcuts: defaults to true, set to false to disallow many common browser shortcuts.

All keys:
- ArrowLeft
- ArrowRight
- ArrowDown
- ArrowUp
- a
- b
- c
- d
- e
- f
- g
- h
- i
- j
- k
- l
- m
- n
- o
- p
- q
- r
- s
- t
- u
- v
- q
- r
- s
- t
- u
- v
- w
- x
- y
- z
- Digit1
- Digit2
- Digit3
- Digit4
- Digit5
- Digit6
- Digit7
- Digit8
- Digit9
- Digit0
- Shift
- Control
- Alt
- ShiftLeft
- ShiftRight
- AltLeft
- AltRight
- ControlLeft
- ControlRight
- Meta
- MetaLeft
- MetaRight
- Enter
- Tab
- CapsLock
- F1
- F2
- F3
- F4
- F5
- F6
- F7
- F8
- F9
- F10
- F11
- F12
- Space
- Backquote
- Minus
- Equal
- Backspace
- BracketRight
- BracketLeft
- Backslash
- Semicolon
- Quote
- Comma
- Period
- Slash
- Escape
- Insert
- Delete
- Home
- End
- PageUp
- PageDown
- ContextMenu
- NumLock
- ScrollLock
- Numpad1
- Numpad2
- Numpad3
- Numpad4
- Numpad5
- Numpad6
- Numpad7
- Numpad9
- NumpadAdd
- NumpadSubtract
- NumpadMultiply
- NumpadDivide
- NumpadDecimal
- NumpadComma

## Mouse API
The mouse object has two parts:

### Mouse Position and Sroll
There are four numeric properties

- **x**: The X position of the cursor.
- **y**: The Y position of the cursor.
- **scrollX**: The horizontal scrolling amount in the current frame. 
- **scrollY**: The vertical scrolling amount in the current frame. One scroll down on a regular mouse scroll wheel is equal to 1 scrollY.

On trackpads in certain browsers the scroll will be very small, but many over time, to allow much smoother scrolling.

### Mouse Buttons
Similar to the keyboard, there are three mouse buttons you can check for

- left
- right
- middle

And their respective "Pressed" and "Released" events.
