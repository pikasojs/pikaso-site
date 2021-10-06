# [Background](/api/classes/Background.html)
        
Background is the lowest and default layer. It will be created automatically when Pikaso is started.

Background is a special kind of [Shape Model](/api/classes/ShapeModel.html) that includes both [Image](/core/image) and [Rect](/core/rect). 

The possibility of directly accessing those models and working on them is also available.

```js
// Access to background's image model
const backgroundImage = editor.board.background.image

// Access to background's rect model
const backgroundOverlay = editor.board.background.overlay

// All public methods and properties of ShapeModel can be accessed
backgroundImage.addFilter({
  name: 'Blur',
  options: {
    blurRadius: 10
  }
})
```