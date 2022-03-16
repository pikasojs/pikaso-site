# [Image](/api/classes/Image.html)
        
Image is another built-in [Shape](/api/classes/ShapeModel.html) and inherits all of its methods and properties.

```js
// create a new image from url
editor.shapes.image.insert('<URL>', {
  // config
})

// create a new image from file
editor.shapes.image.insert('<FILE>', {
  // config
})

// create a new image from Konva
const konvaImage = new Konva.Image({
  image: <Image>
})

editor.shapes.image.insert(konvaImage, {
  // config
})
```