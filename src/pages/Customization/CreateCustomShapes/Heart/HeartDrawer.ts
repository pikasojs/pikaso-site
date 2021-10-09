import { Konva, Board, ShapeDrawer, getPointsDistance } from 'pikaso'

import { HeartModel } from './HeartModel'

export class HeartDrawer extends ShapeDrawer<Konva.Path, Konva.PathConfig> {
  public node: Konva.Path | null = null

  constructor(board: Board) {
    super(board, 'Heart')
  }

  /**
   * @inheritdoc
   * @override
   */
  public insert(config: Konva.PathConfig): HeartModel {
    return super.insert(config)
  }

  /**
   * @inheritdoc
   * @override
   */
  public draw(config: Partial<Konva.PathConfig> = {}) {
    super.draw(config)
  }

  /**
   * @inheritdoc
   * @override
   */
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
