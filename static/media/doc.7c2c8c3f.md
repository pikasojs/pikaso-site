# [Drawing](/api/classes/ShapeDrawer.html)

[Shape Drawer](/api/classes/ShapeDrawer.html) and [Shape Model](/api/classes/ShapeModel.html) are the fundamental components of Pikaso shapes.

[Shape Drawer](/api/classes/ShapeDrawer.html) represents how a Shape behaves when it is being created, while the [Shape Model](/api/classes/ShapeModel.html) represents how it behaves after it has been created.

[insert](/api/classes/ShapeDrawer.html#insert), [draw](/api/classes/ShapeDrawer.html#draw) and [stopDrawing](/api/classes/ShapeDrawer.html#stopDrawing) are the most important methods of [Shape Drawer](/api/classes/ShapeDrawer.html)

### Create custom shapes

For more information on extending the [Shape Model](/api/classes/ShapeModel.html) and [Shape Drawer](/api/classes/ShapeDrawer.html) classes, check out [tutorials/create-custom-shapes](/tutorials/create-custom-shapes).

```ts
// insert a circle
editor.shapes.circle.insert({
  /* config */
})

// start drawing a circle
editor.shapes.circle.draw({
  fill: 'blue'
})

// stop drawing circle
editor.shapes.circle.stopDrawing()

// start drawing a polygon
editor.shapes.polygon.draw({
  fill: 'red',
  sides: 5
})
```