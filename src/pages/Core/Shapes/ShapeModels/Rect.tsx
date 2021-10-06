import { ShapeModel } from '../ShapeModel'

import { ShapesList } from '..'

const codes = {
  insert: `editor.shapes.rect.insert({
  width: 150,
  height: 150,
  x: 100,
  y: 150,
  fill: 'tomato'
})`
}

export default function RectModel() {
  return (
    <ShapeModel
      type="Rect"
      codes={codes}
      insertFn={ShapesList.find(shape => shape.title === 'Rect')?.insert!}
    />
  )
}
