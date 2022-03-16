# [Selection](/api/classes/Selection.html)
        
Selection component provides both visual and programmatic control over created [shapes](/api/classes/ShapeModel.html) in a board.


```ts
// configure selection
const editor = new Pikaso({
  container: <element>,
  selection: {
    interactive: true, // enable or disable visual selection
    keyboard: {
      enabled: true, // enable or disable keyboard shortcuts
      movingSpaces: 5,
      map: {
        delete: ['Backspace', 'Delete'],
        moveLeft: ['ArrowLeft'],
        moveRight: ['ArrowRight'],
        moveUp: ['ArrowUp'],
        moveDown: ['ArrowDown'],
        deselect: ['Escape']
      }
    },
    transformer: {
      borderDash: [15, 10],
      borderStroke: '#fff',
      borderStrokeWidth: 3,
      anchorSize: 15,
      anchorFill: '#fff',
      anchorStroke: '#fff',
      anchorStrokeWidth: 1,
      anchorCornerRadius: 30,
      borderDash: [0, 0]
    },
    zone: {
      fill: 'rgba(105, 105, 105, 0.7)',
      stroke: '#dbdbdb'
    }
  }
})

// creates a circle
const shape = editor.board.circle.insert({ /* config */ })

// select the created shape
shape.select() // or editor.board.selection.add([shape])

// deselect the shape
shape.deselect()

// toggle shape selection
editor.board.selection.toggle(shape)

// select all shapes in the board
editor.board.selection.selectAll()

// deselect all shapes in the board
editor.board.selection.deselectAll()

// select multiple shapes
editor.board.selection.multi([shape, ...moreShapes])

// delete all selected shapes
editor.board.selection.delete()

// move the selected shapes
editor.board.selection.moveX(100)
editor.board.selection.moveY(100)

// add filter to the selected shapes
editor.board.selection.addFilter({
  name: 'blur',
  options: {
    blurRadius: 10
  }
})
```