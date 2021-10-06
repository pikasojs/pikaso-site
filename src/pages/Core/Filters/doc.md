# [Filter](/api/classes/Filter.html)
        
Filters are the best way to add visual effects to [Background](/api/classes/Background.html) and [Shapes](/api/classes/ShapeModel.html)

[This page contains a list of all listeners to this event](/api/index.html#Filters)


```ts
// Adds Blur effect to background image
editor.board.background.image.addFilter({
  name: 'Blur',
  options: {
    blurRadius: 20
  }
})

// Adds Contrast filter to all selected shapes
editor.selection.addFilter({
  name: 'Contrast',
  options: {
    contrast: 30
  }
})

// Remove Contrast filter from selected items
editor.selection.removeFilter('Contrast')

// Add Mask filter to a shape
const shape = editor.shapes.circle.insert({ /* config */ })

shape.addFilter({
  name: 'Mask',
  options: {
    threshold: 10
  }
})

// Remove Mask filter from the shape
shape.removeFilter('Mask')
```