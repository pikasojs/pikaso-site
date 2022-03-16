# [Filter](/api/classes/Filter.html)
        
Filters are the best way to add visual effects to [Background](/api/classes/Background.html) and [Shapes](/api/classes/ShapeModel.html)

[This page contains a list of all listeners to this event](/api/index.html#Filters)


### Create Custom Filters

[Read More](/advanced/create-custom-filters)

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

// Adds multiple filters to all selected shapes
editor.selection.addFilter([
  {
    name: 'Contrast',
    options: {
      contrast: 30
    }
  }, 
  {
    name: 'Blur',
    options: {
      blurRadius: 20
    }
  }
])

// Remove Contrast filter from selected items
editor.selection.removeFilter({ name: 'Contrast' })

// Remove multiple filters
editor.selection.removeFilter([
  { name: 'Blur' },
  { name: 'Contrast' }
])


// Add Mask filter to a shape
const shape = editor.shapes.circle.insert({ /* config */ })

shape.addFilter({
  name: 'Mask',
  options: {
    threshold: 10
  }
})

// Remove Mask filter from the shape
shape.removeFilter({ name: 'Mask' })

// add custom filter
shape.addFilter({
  customFn: imageData => theCustomFilter(imageData)
})

// Apply filters to shapes directly
editor.filters.apply(<ListOfShapes>, <ListOfFilters>)

// Remove filters of shapes directly
editor.filters.remove(<ListOfShapes>, <ListOfFilters>)
```
