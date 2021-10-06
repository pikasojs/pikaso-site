# [Flip](/api/classes/Flip.html)
        
When referring to an [Image](/api/classes/ImageModel.html) or [Shape](/api/classes/ShapeModel.html), [Flip](/api/classes/Flip.html) is a feature that allows you to turn an image or shape [horizontal](/api/classes/Flip.html#horizontal) or [vertical](/api/classes/Flip.html#vertical)

[Read more on Wikipedia](https://en.wikipedia.org/wiki/Flipped_image)


```ts
// flip the board including its active shapes
editor.board.flip.vertical()
editor.board.flip.horizontal()

// flip background
editor.board.background.image.flipX()
editor.board.background.image.flipY()

// flip selected shapes
editor.board.flip.vertical(editor.board.selection.shapes)
editor.board.flip.horizontal(editor.board.selection.shapes)

// flip a shape
const circle = editor.shapes.circle.insert({
  fill: 'red',
  x: 100,
  y: 100,
  radius: 50
})

circle.flipX()
circle.flipY()

// or
editor.board.flip.vertical([circle])
editor.board.flip.horizontal([circle])
```