# [Label](/api/classes/Label.html)
        
Label is a special kind of [Text](/api/classes/Text.html) and [Shape Model](/api/classes/ShapeModel.html) that includes both [Text](/core/shapes/text) and [Tag](https://konvajs.org/api/Konva.Tag.html). 

Label comes with built-in features such as Inline Editing and Auto Transformation.


```js
// create a new label
const myLabel = editor.shapes.label.insert({
  container: {
    x: 40,
    y: 100
  },
  tag: {
    fill: '#262626'
  },
  text: {
    text: 'Pikaso Rocks',
    fill: '#00ff00',
    fontSize: 40
  }
})

// update label's tag
mylabel.updateTag({
  fill: '#fff',
  cornerRadius: [2, 0, 2, 0] // or simply cornerRadius: 2
})

// update label's text
mylabel.updateText({
  fill: '#ff0000',
  fontSize: 30,
  fontFamily: 'Arial'
})

// all ShapeModel methods and properties are available
mylabel.addFilter({
  name: 'Blur',
  options: {
    blurRadius: 10
  }
})
```