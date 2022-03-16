# [History](/api/classes/History.html)
        
Pikaso is a fully stateful library that tracks changes across separated states to allow navigation around them.

In this regard [undo](/api/classes/History.html#undo), [redo](/api/classes/History.html#redo) and [jump](/api/classes/History.html#jump) are available.


```js
// go to previous state
editor.undo() // or editor.history.undo()

// go to next state
editor.redo() // or editor.history.redo()

// reinitialize the board
editor.reset()

// jump to specific state
editor.history.jump(<Number>)
```