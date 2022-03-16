import { useEffect } from 'react'
import { Box } from '@mui/material'
import { useTitle } from 'react-use'
import raw from 'raw.macro'

import usePikaso from 'src/hooks/use-pikaso'
import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function SnapGrid() {
  useTitle('Pikaso | Core Components | Groups')
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

    const shapes = [
      editor.shapes.circle.insert({
        fill: 'black',
        radius: 30,
        x: 550,
        y: 150
      }),
      editor.shapes.circle.insert({
        fill: 'black',
        radius: 30,
        x: 650,
        y: 150
      }),
      editor.shapes.circle.insert({
        fill: 'red',
        radius: 70,
        stroke: '#262626',
        x: 600,
        y: 200
      }),
      editor.shapes.circle.insert({
        fill: '#262626',
        strokeWidth: 9,
        stroke: 'orange',
        radius: 10,
        x: 630,
        y: 180
      }),
      editor.shapes.circle.insert({
        fill: '#262626',
        strokeWidth: 10,
        stroke: 'orange',
        radius: 11,
        x: 570,
        y: 180
      })
    ]

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
