import { ShapeModel } from '../ShapeModel'

import { ShapesList } from '..'

const codes = {
  insert: `editor.shapes.polygon.insert({
  radius: 100,
  sides: 5,
  x: 100,
  y: 150,
  fill: 'tomato'
})`
}

export default function PolygonModel() {
  return (
    <ShapeModel
      type="Polygon"
      codes={codes}
      insertFn={ShapesList.find(shape => shape.title === 'Polygon')?.insert!}
    />
  )
}
