import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function SnapGrid() {
  useTitle('Pikaso | Core Components | Snap Grid')
  const [ref, editor] = usePikaso({
    snapToGrid: {
      strokeWidth: 1,
      stroke: 'purple',
      dash: [5, 5]
    },
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    if (!editor) {
      return
    }

    editor.shapes.triangle.insert({
      fill: 'red',
      radius: 50,
      x: 200,
      y: 100
    })

    const shapes = [
      editor.shapes.circle.insert({
        fill: 'black',
        radius: 30,
        x: 500,
        y: 100
      }),
      editor.shapes.circle.insert({
        fill: 'blue',
        radius: 70,
        x: 600,
        y: 200
      })
    ]

    editor.shapes.rect.insert({
      fill: 'orange',
      width: 200,
      height: 120,
      x: 750,
      y: 300
    })

    editor.board.groups.attach(shapes, 'g1')
  }, [editor])

  return (
    <div>
      <Markdown>{doc}</Markdown>

      <Box mb={3}>
        <div
          ref={ref}
          style={{
            margin: '0 auto',
            background: '#CBC3E3',
            width: '100%',
            height: '500px'
          }}
        />
      </Box>
    </div>
  )
}
