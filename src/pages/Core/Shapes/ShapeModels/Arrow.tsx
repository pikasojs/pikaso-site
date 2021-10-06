import { Pikaso } from 'pikaso'

import { ShapeModel } from '../ShapeModel'

const codes = {
  insert: `editor.shapes.arrow.insert({
  points: [50, 50, 300, 50],
  stroke: 'blue',
  strokeWidth: 10
})`
}

export default function ArrowModel() {
  return (
    <ShapeModel
      type="Arrow"
      codes={codes}
      insertFn={(editor: Pikaso) =>
        editor.shapes.arrow.insert({
          points: [250, 150, 600, 150],
          stroke: 'tomato',
          strokeWidth: 10
        })
      }
    />
  )
}
