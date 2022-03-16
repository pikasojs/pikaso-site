# [Events](/api/classes/Events.html)
        
Subscribing to events is the best way to keep up with changes and actions. 

With [on](/api/classes/Pikaso.html#on) and [off](/api/classes/Pikaso.html#off) methods, this is easy to accomplish.

[This page contains a list of all listeners to this event](/api/index.html#EventListenerNames)

```ts
// subscribe to all events
editor.on('*', data => {
  console.log(data)
})

// subscribe to shape:create event
editor.on('shape:create', data => {
  console.log(data)
})

// unsubscribe from shape:create event
editor.off('shape:create', data => {
  console.log(data)
})

// subscribe to shape:create and history:undo events
editor.on(['shape:create', 'history:undo'], data => {
  console.log(data)
})

// unsubscribe from shape:create and history:undo events
editor.off(['shape:create', 'history:undo'], data => {
  console.log(data)
})
```