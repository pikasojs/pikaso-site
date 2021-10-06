import { ShapeModel } from '../ShapeModel'

import { ShapesList } from '..'

const codes = {
  insert: `editor.shapes.triangle.insert({
  radius: 100,
  x: 100,
  y: 150,
  fill: 'tomato'
})`
}

export default function TriangleModel() {
  return (
    <ShapeModel
      type="Triangle"
      codes={codes}
      insertFn={ShapesList.find(shape => shape.title === 'Triangle')?.insert!}
    />
  )
}
