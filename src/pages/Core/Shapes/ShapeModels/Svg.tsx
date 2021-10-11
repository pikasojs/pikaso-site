import { Pikaso } from 'pikaso'

import { ShapeModel } from '../ShapeModel'
import { SvgPath } from './sampleCodes'

const codes = {
  insert: `editor.shapes.svg.insert({
    data: '<path>',
    fill: 'red',
    x: 100,
    y: 100,
    scaleX: 1,
    scaleY: 1
})`
}

export default function SvgModel() {
  return (
    <ShapeModel
      type="Svg"
      codes={codes}
      insertFn={(editor: Pikaso) =>
        editor.shapes.svg.insert({
          data: SvgPath,
          fill: '#262626',
          x: 100,
          y: 0,
          scaleX: 1.5,
          scaleY: 1.5
        })
      }
    />
  )
}
