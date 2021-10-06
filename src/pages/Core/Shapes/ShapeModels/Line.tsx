import { Pikaso } from 'pikaso'

import { ShapeModel } from '../ShapeModel'

const codes = {
  insert: `editor.shapes.line.insert({
  points: [50, 50, 300, 50],
  stroke: 'blue',
  strokeWidth: 10
})`
}

export default function LineModel() {
  return (
    <ShapeModel
      type="Line"
      codes={codes}
      insertFn={(editor: Pikaso) =>
        editor.shapes.line.insert({
          points: [250, 150, 600, 150],
          stroke: 'blue',
          strokeWidth: 10
        })
      }
    />
  )
}
