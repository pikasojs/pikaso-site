import { ShapeModel } from '../ShapeModel'

import { ShapesList } from '..'

const codes = {
  insert: `editor.shapes.circle.insert({
  radius: 100,
  x: 100,
  y: 150,
  fill: 'tomato'
})`
}

export default function CircleModel() {
  return (
    <ShapeModel
      type="Circle"
      codes={codes}
      insertFn={ShapesList.find(shape => shape.title === 'Circle')?.insert!}
    />
  )
}
