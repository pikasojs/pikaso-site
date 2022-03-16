# Snap To Grid

The Snap To Grid feature ensures that objects can be easily positioned in line with any existing objects on the layer.
By default, this feature is disabled, but it is easy to enable

```ts
// Snap To Grid lines have the following default style
// {
//   stroke: '#000',
//   strokeWidth: 1,
//   dash: [2, 6],
// }
const editor = new Pikaso({
  container: document.getElementById('<YOUR_DIV_ID>'),
  snapToGrid: {}
})

// Line styles can be overridden
const editor = new Pikaso({
  container: document.getElementById('<YOUR_DIV_ID>'),
  snapToGrid: {
    strokeWidth: 1,
    stroke: 'purple',
    dash: [5, 5]
  }
})

// Disable Snap To Grid
editor.snapGrid.disable()

// Enable Snap To Grid after the object is instantiated
editor.snapGrid.enable()

// Set options
editor.snapGrid.setOptions({
  strokeWidth: 2,
  stroke: 'red'
})

// Set the grid snapping accuracy offset
editor.snapGrid.setOffset(10) // default is 5
```