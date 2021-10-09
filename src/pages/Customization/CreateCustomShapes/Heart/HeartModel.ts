import { Konva, rotateAroundCenter, ShapeModel } from 'pikaso'

export class HeartModel extends ShapeModel<Konva.Path, Konva.PathConfig> {
  public get type() {
    return 'heart'
  }

  public rotate(theta: number) {
    rotateAroundCenter(this.node, theta)

    this.board.events.emit('shape:rotate', {
      shapes: [this]
    })
  }
}
