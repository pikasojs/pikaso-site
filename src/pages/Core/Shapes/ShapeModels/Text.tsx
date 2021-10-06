import { ShapeModel } from '../ShapeModel'

import { ShapesList } from '..'

const codes = {
  insert: `editor.shapes.text.insert({
  text: 'Untitled Text'
  x: 100,
  y: 100,
  fill: 'purple'
})`
}

export default function TextModel() {
  return (
    <ShapeModel
      type="Text"
      codes={codes}
      insertFn={ShapesList.find(shape => shape.title === 'Text')?.insert!}
    />
  )
}
