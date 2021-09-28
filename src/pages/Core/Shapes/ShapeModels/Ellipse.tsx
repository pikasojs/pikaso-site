import { ShapeModel } from '../ShapeModel'

import { ShapesList } from '..'

const codes = {
  insert: `editor.shapes.rect.insert({
  width: 150,
  height: 150,
  x: 100,
  y: 100,
  fill: 'purple'
})`
}

export default function EllipseModel() {
  return (
    <ShapeModel
      type="Ellipse"
      codes={codes}
      insertFn={ShapesList.find(shape => shape.title === 'Ellipse')?.insert!}
    />
  )
}
