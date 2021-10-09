# Create Custom Shapes

Pikaso comes with a couple of built-in [Shapes](/core/shapes) that cover most of the use cases.

Because of its strong OOP architecture this makes it possible to easily extend [ShapeDrawer](/api/classes/ShapeDrawer.html) and [ShapeModel](/api/classes/ShapeModel.html) in order to create any custom shape.

For example, let's create a custom Heart![heart](/shapes/heart.svg) heart shape.

[ShapeDrawer](/api/classes/ShapeDrawer.html) and [ShapeModel](/api/classes/ShapeModel.html) need to be extended to let us create our model and register it with Shapes.

Let's start with HeartModel. Since we will be drawing an SVG heart, we should have our model like this. 

The rest will be handled by Pikaso, however you can change any Method of [ShapeModel](/api/classes/ShapeModel.html) for your needs.

```ts
import { Konva, ShapeModel } from 'pikaso'

export class HeartModel extends ShapeModel<Konva.Path, Konva.PathConfig> {
  public get type() {
    return 'heart'
  }
}
```

The next step is to describe how the heart shape should draw itself on the canvas.

```ts
import { Konva, Board, ShapeDrawer, getPointsDistance } from 'pikaso'

import { HeartModel } from './HeartModel'

export class HeartDrawer extends ShapeDrawer<Konva.Path, Konva.PathConfig> {
  public node: Konva.Path | null = null

  constructor(board: Board) {
    super(board, 'Heart')
  }

  public insert(config: Konva.PathConfig): HeartModel {
    return super.insert(config)
  }

  public draw(config: Partial<Konva.PathConfig> = {}) {
    super.draw(config)
  }

  protected createShape(config: Omit<Konva.PathConfig, 'data'>): HeartModel {
    this.node = new Konva.Path({
      fill: 'red',
      ...config,
      data: 'M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402'
    })

    return new HeartModel(this.board, this.node)
  }

  /**
   * Starts drawing a heart shape
   */
  protected onStartDrawing() {
    super.onStartDrawing()

    if (!this.isDrawing) {
      return
    }

    this.createShape({
      x: this.startPoint.x,
      y: this.startPoint.y,
      scaleX: 0,
      scaleY: 0,
      ...this.config
    })
  }

  /**
   * Continues drawing the heart by changing its scale
   */
  protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>) {
    super.onDrawing(e)

    if (!this.node) {
      return
    }

    const point = this.board.stage.getPointerPosition()!
    const distance = getPointsDistance(point, this.getShapePosition())

    this.node.setAttrs({
      x: point.x - this.node.width(),
      scaleX: distance / 10,
      scaleY: distance / 10
    })
  }
}
```

That's all!
The final step is to register the heart shape model.

```ts
import type { BaseShapes } from 'pikaso'

interface Shapes extends BaseShapes {
  heart: HeartDrawer
}

const editor = new Pikaso<Shapes>(
  {
    container: <the element>,
    ...options
  },
  board => ({
    heart: new HeartDrawer(board)
  })
)
```

We can now insert or draw a heart shape on the canvas like other built-in shapes.

```ts
// create the heart shape
editor.shapes.heart.insert({
  x: 100,
  y: 100,
  scale: {
    x: 6,
    y: 6
  }
})

// start drawing heart shape
editor.shapes.heart.insert()
```

